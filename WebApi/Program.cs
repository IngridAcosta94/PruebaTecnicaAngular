
using Data.DataDB;
using Entitys.Mappings;
using FluentAssertions.Common;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Reflection;

namespace WebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            //builder.Services.AddDbContext<PruebaTecnicaContext>(options =>
            //{
            //     options.UseSqlServer(Configuration.GetConnectionString("PruebaAppDbContext")
            //    ?? throw new InvalidOperationException("Database Connection String Not Found...")).UseLazyLoadingProxies();
            //});

            builder.Services.AddDbContext<PruebaTecnicaContext>(opt => {

                opt.UseSqlServer(builder.Configuration.GetConnectionString("PruebaAppDbContext"));
            });
            //builder.Services.AddAutoMapper(Assembly.GetAssembly(typeof(Program)));
            //builder.Services.AddAutoMapper(Assembly.GetAssembly(typeof(Program)));
            builder.Services.AddAutoMapper(typeof(MappingProfile).Assembly);
            builder.Services.AddControllers();
            builder.Services.AddControllersWithViews();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddCors(options => options.AddPolicy("corsPolicy", builder =>
            {
                builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
            }));

            var app = builder.Build();


            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            // Configure Cors
            //builder.Services.AddCors(options => options.AddPolicy("corsPolicy", builder =>
            //{
            //    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
            //}));

            app.UseHttpsRedirection();
          
            app.UseAuthorization();

            app.UseCors("corsPolicy");

            app.MapControllers();

            app.Run();
        }
    }
}