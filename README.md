
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Microsoft DSX Project Template</title>
</head>

<body>

    <h1>Web App Setup Instructions</h1>

    <h2>Client (Front-end)</h2>
    <ul>
        <li>React with Redux and TypeScript</li>
        <li>Microsoft Fabric UI</li>
        <li>NSwag generated DTOs and client for back-end API</li>
        <li>MSAL-React and MSAL-Browser</li>
    </ul>

    <h2>Service (Back-end)</h2>
    <ul>
        <li>.NET 6.0</li>
        <li>MediatR as CQRS implementation</li>
        <li>AutoMapper handling Entity-to-DTO mapping</li>
        <li>Unit and integration tests using Moq and MSTest</li>
        <li>Swagger UI</li>
    </ul>

    <h2>How to Run Locally</h2>
    <ol>
        <li>Download and install the .NET Core SDK</li>
        <li>If localdb is not available, download and install SQL Server Express</li>
        <li>Open a terminal and navigate to the service folder</li>
        <li>Run the following commands:</li>
        <pre>
            <code>dotnet build</code>
            <code>dotnet run --project Microsoft.DSX.ProjectTemplate.API</code>
        </pre>
        <li>Open your browser to: <a href="https://localhost:44345/swagger">https://localhost:44345/swagger</a></li>
        <li>In another terminal, navigate to the client folder and run the following npm commands:</li>
        <pre>
            <code>npm install</code>
            <code>npm start</code>
        </pre>
        <li>The webpack dev server hosts the front-end, and your browser will open to: <a href="http://localhost:3000">http://localhost:3000</a></li>
    </ol>

    <h2>Adding an Entity Framework Core Migration</h2>
    <p>Open a command prompt in the Microsoft.DSX.ProjectTemplate.Data folder.</p>
    <pre>
        <code>dotnet tool install --global dotnet-ef</code>
        <code>dotnet ef migrations add &lt;NAME OF MIGRATION&gt;</code>
    </pre>

    <h2>Removing the Latest Entity Framework Core Migration</h2>
    <p>Open a command prompt in the Microsoft.DSX.ProjectTemplate.Data folder.</p>
    <pre>
        <code>dotnet ef migrations remove</code>
    </pre>

    <h2>To-Do</h2>
    <h3>Client</h3>
    <p>No current items</p>

    <h3>Service</h3>
    <ul>
        <li>Include Authentication and Authorization logic</li>
        <li>Move away from localdb</li>
        <li>Implement ApiConventions</li>
    </ul>

    <h3>Miscellaneous</h3>
    <ul>
        <li>Create a CLI setup wizard</li>
    </ul>

</body>

</html>
