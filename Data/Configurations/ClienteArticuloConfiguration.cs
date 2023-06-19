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
    internal class ClienteArticuloConfiguration : IEntityTypeConfiguration<ClienteArticulo>
    {
        public void Configure(EntityTypeBuilder<ClienteArticulo> builder)
        {
            builder.HasKey(e => e.IdClienteArticulo).HasName("PK__Cliente___27D94009067B98E1");

            //entity.ToTable("Cliente_Articulo");

            builder.HasIndex(e => new { e.IdCliente, e.IdArticulo }, "UQ__Cliente___EA1B9396AC44EFE8").IsUnique();

            builder.Property(e => e.IdClienteArticulo).HasColumnName("Id_Cliente_Articulo");
            builder.Property(e => e.Fecha).HasColumnType("date");

            builder.HasOne(d => d.IdArticuloNavigation).WithMany(p => p.ClienteArticulos)
                .HasForeignKey(d => d.IdArticulo)
                .HasConstraintName("FK__Cliente_A__IdArt__3E52440B");

            builder.HasOne(d => d.IdClienteNavigation).WithMany(p => p.ClienteArticulos)
                .HasForeignKey(d => d.IdCliente)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Cliente_A__IdCli__3D5E1FD2");
        }
    }
}
