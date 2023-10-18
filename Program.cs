using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
	app.UseExceptionHandler("/Error");
	app.UseHsts();
}

app.UseHttpsRedirection();

// This is the new addition:
var defaultFileOptions = new DefaultFilesOptions();
defaultFileOptions.DefaultFileNames.Clear();  // Supprimez les valeurs par défaut
defaultFileOptions.DefaultFileNames.Add("Accueil.html");  // Ajoutez votre fichier comme valeur par défaut

app.UseDefaultFiles(defaultFileOptions);  // Utilisez la configuration que vous venez de créer
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.Run();
