using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using ProjectPal.Data;
using ProjectPal.Dtos;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ProjectPal.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AccountController : ControllerBase
{
    private readonly ILogger<AccountController> _logger;
    private readonly SignInManager<ApplicationUser> _signInManager;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly IConfiguration _config;
    //private readonly IUserEmailStore<ApplicationUser> _emailStore;
    private readonly IUserStore<ApplicationUser> _userStore;
    //private readonly IEmailSender _emailSender;

    public AccountController(ILogger<AccountController> logger,
      SignInManager<ApplicationUser> signInManager,
      UserManager<ApplicationUser> userManager,
      IConfiguration config,
      //IUserEmailStore<ApplicationUser> emailStore,
      IUserStore<ApplicationUser> userStore
      //IEmailSender emailSender
      )
	{
        _logger = logger;
        _signInManager = signInManager;
        _userManager = userManager;
        _config = config;
        //_emailStore = emailStore;
        _userStore = userStore;
        //_emailSender = emailSender;
    }


    [HttpGet]
    public async Task<IActionResult> Logout()
    {
        await _signInManager.SignOutAsync();
        return RedirectToAction("Index", "App");
    }

    [HttpPost("CreateToken")]
    public async Task<IActionResult> CreateToken([FromBody] LoginRequest loginRequest)
    {

        ApplicationUser user = await _userManager.FindByNameAsync(loginRequest.Username);

        if (user == null)
        {
            return BadRequest("The email or the password was incorrect.");
        }

        var result = await _signInManager.CheckPasswordSignInAsync(user, loginRequest.Password, false);

        if (!result.Succeeded)
        {
            return BadRequest("The email or the password was incorrect.");
        }

        JwtSecurityToken token = GetTokenFromUser(user);

        var loginResponse = new
        {
            token = new JwtSecurityTokenHandler().WriteToken(token),
            expiration = token.ValidTo
        };

        return Created("", loginResponse);
    }

    private JwtSecurityToken GetTokenFromUser(ApplicationUser user)
    {

        // Create the Token
        List<Claim> claims = new()
        {
            //new Claim(JwtRegisteredClaimNames.Sub, user.Email),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName)
        };

        if (user.IsAdministrator)
        {
            claims.Add(new Claim("Administrator", "yes"));
        }

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:Key"]));

        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            _config["Tokens:Issuer"],
            _config["Tokens:Audience"],
            claims,
            expires: DateTime.UtcNow.AddMinutes(30),
            signingCredentials: creds);
        return token;
    }

    [HttpPost("Register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest registerRequest)
    {
        registerRequest.ReturnUrl ??= Url.Content("~/");

        // TODO Validate

        ApplicationUser newUser = new();

        await _userStore.SetUserNameAsync(newUser, registerRequest.Email, CancellationToken.None);
        //await _emailStore.SetEmailAsync(newUser, registerRequest.Email, CancellationToken.None);
        var result = await _userManager.CreateAsync(newUser, registerRequest.Password);

        if (!result.Succeeded)
        {
            IEnumerable<IdentityError> errors = result.Errors;

            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }

            string errorMessage = string.Join(",", errors.Select(x => x.Description));

            return BadRequest(errorMessage);
        }

        _logger.LogInformation("User created a new account with password.");

        var userId = await _userManager.GetUserIdAsync(newUser);
        //var code = await _userManager.GenerateEmailConfirmationTokenAsync(newUser);
        //code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
        //var callbackUrl = Url.Page(
        //    "/Account/ConfirmEmail",
        //    pageHandler: null,
        //    values: new { area = "Identity", userId = userId, code = code, returnUrl = registerRequest.ReturnUrl },
        //    protocol: Request.Scheme);

        //await _emailSender.SendEmailAsync(registerRequest.Email, "Confirm your email",
        //    $"Please confirm your account by <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>clicking here</a>.");

        //if (_userManager.Options.SignIn.RequireConfirmedAccount)
        //{
        //    // TODO
        //    return RedirectToPage("RegisterConfirmation", new { email = registerRequest.Email, returnUrl = registerRequest.ReturnUrl });
        //}
        //else
        //{
        //    // don't know if 'SignInAsync' is needed here since we're going to rely on the 'CreateToken' endpoint to dish out creds
        //    await _signInManager.SignInAsync(newUser, isPersistent: false);
        //    return LocalRedirect(registerRequest.ReturnUrl);
        //}


        // return new jwt here if we don't want to bother requiring email verification?
        // return Created("", newUser);

        JwtSecurityToken token = GetTokenFromUser(newUser);

        var registerResponse = new
        {
            token = new JwtSecurityTokenHandler().WriteToken(token),
            expiration = token.ValidTo
        };

        return Created("", registerResponse);
    }
}
