# Study Pal

### About

This is an application meant to track one's own personal progress on how much they've studied on any subject they are interested in.


A live demo example is hosted in an Azure App Service and can be viewed here:

[https://projectpalapp2.azurewebsites.net/](https://projectpalapp2.azurewebsites.net/)


### Features
- There's a simple form to enter into the system what and when you studied and for how long:

![image](https://github.com/aalexander05/study-pal/assets/29714952/2156c323-ccca-4b66-bc6c-91655185733e)


- There is a summary screen that shows the total minutes studied (within the period of the last month), and the most studied subjects by the user:

![image](https://github.com/aalexander05/study-pal/assets/29714952/39364f3c-ab64-4756-ad13-886e551d137a)

- There's a list that allow the user to view all their study sessions:

![image](https://github.com/aalexander05/study-pal/assets/29714952/4c2c4d6e-dfde-4354-89e7-893a1ee5ffa2)





This is a full stack web application using the following technologies:
- [Angular](https://angular.io/)
- [Bulma CSS](https://bulma.io/)
- [ASP.NET Core Web API](https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-6.0)
- [ASP.NET Core Identity](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-7.0&tabs=visual-studio)
- [Entity Framework Core](https://learn.microsoft.com/en-us/ef/core/)
- [Sqlite](https://www.sqlite.org/index.html)



### Versions of tools currently being used for development of this project:
- Node v16.15.0
- ~.NET v6 SDK

### To run the project locally:
- In a terminal, navigate to [the front-end project directory](https://github.com/aalexander05/study-pal/tree/study-session/ProjectPal/Client).
- Run `npm run watch`
  - This will build the front-end and put the distributable files in the wwwroot folder of the API project.
- Run the API project with an IDE like Visual Studio, or with the dotnet CLI command `dotnet run`
- The app should be running locally here - [https://localhost:7053](url).
