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
    internal class UsuarioConfiguration : IEntityTypeConfiguration<Usuario>
    {


        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.HasKey(e => e.Id).HasName("PK__Usuario__3214EC07B6BDF8EA");

            //entity.ToTable("Usuario");

            builder.HasIndex(e => e.IdCliente, "UQ__Usuario__D594664397724FB7").IsUnique();

            builder.Property(e => e.Contrasenia)
                .HasMaxLength(100)
                .IsUnicode(false);
            builder.Property(e => e.Correo)
                .HasMaxLength(150)
                .IsUnicode(false);
            builder.Property(e => e.Nombre)
                .HasMaxLength(100)
                .IsUnicode(false);

            builder.HasOne(d => d.IdClienteNavigation).WithOne(p => p.Usuario)
                .HasForeignKey<Usuario>(d => d.IdCliente)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("FK__Usuario__IdClien__4AB81AF0");
        }
    }
}

