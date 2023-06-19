using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entitys.Entity;
using System.Reflection.Emit;

namespace Data.Configurations
{
    public class ArticuloConfiguration : IEntityTypeConfiguration<Articulo>
    {


        public void Configure(EntityTypeBuilder<Articulo> builder)
        {
            builder.HasKey(e => e.Id).HasName("PK__Articulo__3214EC079567E8BC");

            builder.Property(e => e.Codigo)
                .HasMaxLength(100)
                .IsUnicode(false);
            builder.Property(e => e.Descripcion)
                .HasMaxLength(100)
                .IsUnicode(false);
            builder.Property(e => e.Imagen)
                .HasMaxLength(100)
                .IsUnicode(false);
            builder.Property(e => e.Precio).HasColumnType("decimal(6, 2)");
        }
    }
}


//modelBuilder.Entity<Articulo>(entity =>
//{
//    entity.HasKey(e => e.Id).HasName("PK__Articulo__3214EC079567E8BC");

//    entity.ToTable("Articulo");

//    entity.Property(e => e.Codigo)
//        .HasMaxLength(100)
//        .IsUnicode(false);
//    entity.Property(e => e.Descripcion)
//        .HasMaxLength(100)
//        .IsUnicode(false);
//    entity.Property(e => e.Imagen)
//        .HasMaxLength(100)
//        .IsUnicode(false);
//    entity.Property(e => e.Precio).HasColumnType("decimal(6, 2)");
//});