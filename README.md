# Microsoft DSX Project Template

Welcome to the Microsoft DSX Project Template! This template provides a structured setup for a web application using React, Redux, TypeScript, and .NET 6.0 with CQRS implementation.

## Client (Front-end)

- React with Redux and TypeScript
- Microsoft Fabric UI
- NSwag generated DTOs and client for back-end API
- MSAL-React and MSAL-Browser

## Service (Back-end)

- .NET 6.0
- MediatR as CQRS implementation
- AutoMapper handling Entity-to-DTO mapping
- Unit and integration tests using Moq and MSTest
- Swagger UI

## How to Run Locally

1. Download and install the .NET Core SDK.
2. If localdb is not available, download and install SQL Server Express.
   - *Note: The localdb requirement will be removed in a future PR.*
3. Open a terminal and navigate to the `service` folder.
4. Run the following commands:
   ```bash
   dotnet build
   dotnet run --project Microsoft.DSX.ProjectTemplate.API
