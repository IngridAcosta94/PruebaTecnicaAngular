using Entitys.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Configurations
{
    internal class ArticuloTiendumConfiguration : IEntityTypeConfiguration<ArticuloTiendum>
    {

        public void Configure(EntityTypeBuilder<ArticuloTiendum> builder)
        {
            builder.HasKey(e => e.IdArticuloTienda).HasName("PK__Articulo__8BEC3D576F95679A");

            builder.HasIndex(e => new { e.IdArticulo, e.IdTienda }, "UQ__Articulo__5D5EB6C546B36459").IsUnique();

            builder.Property(e => e.IdArticuloTienda).HasColumnName("Id_Articulo_Tienda");
            builder.Property(e => e.Fecha).HasColumnType("date");

            builder.HasOne(d => d.IdArticuloNavigation).WithMany(p => p.ArticuloTienda)
                .HasForeignKey(d => d.IdArticulo)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Articulo___IdArt__4222D4EF");

            builder.HasOne(d => d.IdTiendaNavigation).WithMany(p => p.ArticuloTienda)
                .HasForeignKey(d => d.IdTienda)
                .HasConstraintName("FK__Articulo___IdTie__4316F928");
        }
    }
}

//modelBuilder.Entity<ArticuloTiendum>(entity =>
//{
//    entity.HasKey(e => e.IdArticuloTienda).HasName("PK__Articulo__8BEC3D576F95679A");

//    entity.ToTable("Articulo_Tienda");

//    entity.HasIndex(e => new { e.IdArticulo, e.IdTienda }, "UQ__Articulo__5D5EB6C546B36459").IsUnique();

//    entity.Property(e => e.IdArticuloTienda).HasColumnName("Id_Articulo_Tienda");
//    entity.Property(e => e.Fecha).HasColumnType("date");

//    entity.HasOne(d => d.IdArticuloNavigation).WithMany(p => p.ArticuloTienda)
//        .HasForeignKey(d => d.IdArticulo)
//        .OnDelete(DeleteBehavior.ClientSetNull)
//        .HasConstraintName("FK__Articulo___IdArt__4222D4EF");

//    entity.HasOne(d => d.IdTiendaNavigation).WithMany(p => p.ArticuloTienda)
//        .HasForeignKey(d => d.IdTienda)
//        .HasConstraintName("FK__Articulo___IdTie__4316F928");
//});