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
    internal class TiendaConfiguration : IEntityTypeConfiguration<Tiendum>
    {
        public void Configure(EntityTypeBuilder<Tiendum> builder)
        {
            builder.HasKey(e => e.Id).HasName("PK__Tienda__3214EC07D1848E97");

            builder.Property(e => e.Direccion)
                .HasMaxLength(200)
                .IsUnicode(false);
            builder.Property(e => e.Sucursal)
                .HasMaxLength(200)
                .IsUnicode(false);
        }
    }
}
