# Study pal

A live demo example is hosted in an Azure App Service and can be viewed here:

[https://projectpalapp2.azurewebsites.net/](https://projectpalapp2.azurewebsites.net/)


This is a full stack web application using the following technologies:
- [Angular](https://angular.io/)
- [Bulma CSS](https://bulma.io/)
- [ASP.NET Core Web API](https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-6.0)
- [ASP.NET Core Identity](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-7.0&tabs=visual-studio)
- [Entity Framework Core](https://learn.microsoft.com/en-us/ef/core/)
- [Sqlite](https://www.sqlite.org/index.html)



### Current versions of tools being used for development of this project:
- Node v16.15.0
- ~.NET v6 SDK

### To run the project locally:
- In a terminal navigate to [the front-end project directory](https://github.com/aalexander05/study-pal/tree/study-session/ProjectPal/Client).
- Run `npm run watch`
  - This will build the front-end and put the distributable files in the wwwroot folder of the API project.
- Run the API project with an IDE like Visual Studio, or with the dotnet CLI command `dotnet run`
- The app should be running locally here - [https://localhost:7053](url).