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
    internal class ClienteConfiguration : IEntityTypeConfiguration<Cliente>
    {


        public void Configure(EntityTypeBuilder<Cliente> builder)
        {
            builder.HasKey(e => e.Id).HasName("PK__Articulo__3214EC079567E8BC");

            builder.Property(e => e.Apellidos)
                .HasMaxLength(100)
                .IsUnicode(false);
            builder.Property(e => e.Direccion)
                .HasMaxLength(100)
                .IsUnicode(false);
            builder.Property(e => e.Nombre)
                .HasMaxLength(100)
                .IsUnicode(false);
        }
    }
}
