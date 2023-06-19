using System;
using System.Collections.Generic;
using Entitys.Entity;
using Microsoft.EntityFrameworkCore;

namespace Data.DataDB;

public partial class PruebaTecnicaContext : DbContext
{
    public PruebaTecnicaContext()
    {
    }

    public PruebaTecnicaContext(DbContextOptions<PruebaTecnicaContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Articulo> Articulos { get; set; }

    public virtual DbSet<ArticuloTiendum> ArticuloTienda { get; set; }

    public virtual DbSet<Cliente> Clientes { get; set; }

    public virtual DbSet<ClienteArticulo> ClienteArticulos { get; set; }

    public virtual DbSet<Tiendum> Tienda { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { }
#warning 
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Articulo>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Articulo__3214EC079567E8BC");

            entity.ToTable("Articulo");

            entity.Property(e => e.Codigo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Descripcion)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Imagen)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Precio).HasColumnType("decimal(6, 2)");
        });

        modelBuilder.Entity<ArticuloTiendum>(entity =>
        {
            entity.HasKey(e => e.IdArticuloTienda).HasName("PK__Articulo__8BEC3D576F95679A");

            entity.ToTable("Articulo_Tienda");

            entity.HasIndex(e => new { e.IdArticulo, e.IdTienda }, "UQ__Articulo__5D5EB6C546B36459").IsUnique();

            entity.Property(e => e.IdArticuloTienda).HasColumnName("Id_Articulo_Tienda");
            entity.Property(e => e.Fecha).HasColumnType("date");

            entity.HasOne(d => d.IdArticuloNavigation).WithMany(p => p.ArticuloTienda)
                .HasForeignKey(d => d.IdArticulo)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Articulo___IdArt__4222D4EF");

            entity.HasOne(d => d.IdTiendaNavigation).WithMany(p => p.ArticuloTienda)
                .HasForeignKey(d => d.IdTienda)
                .HasConstraintName("FK__Articulo___IdTie__4316F928");
        });

        modelBuilder.Entity<Cliente>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Cliente__3214EC07BB309C6F");

            entity.ToTable("Cliente");

            entity.Property(e => e.Apellidos)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Direccion)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Nombre)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<ClienteArticulo>(entity =>
        {
            entity.HasKey(e => e.IdClienteArticulo).HasName("PK__Cliente___27D94009067B98E1");

            entity.ToTable("Cliente_Articulo");

            entity.HasIndex(e => new { e.IdCliente, e.IdArticulo }, "UQ__Cliente___EA1B9396AC44EFE8").IsUnique();

            entity.Property(e => e.IdClienteArticulo).HasColumnName("Id_Cliente_Articulo");
            entity.Property(e => e.Fecha).HasColumnType("date");

            entity.HasOne(d => d.IdArticuloNavigation).WithMany(p => p.ClienteArticulos)
                .HasForeignKey(d => d.IdArticulo)
                .HasConstraintName("FK__Cliente_A__IdArt__3E52440B");

            entity.HasOne(d => d.IdClienteNavigation).WithMany(p => p.ClienteArticulos)
                .HasForeignKey(d => d.IdCliente)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Cliente_A__IdCli__3D5E1FD2");
        });

        modelBuilder.Entity<Tiendum>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Tienda__3214EC07D1848E97");

            entity.Property(e => e.Direccion)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.Sucursal)
                .HasMaxLength(200)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Usuario__3214EC07B6BDF8EA");

            entity.ToTable("Usuario");

            entity.HasIndex(e => e.IdCliente, "UQ__Usuario__D594664397724FB7").IsUnique();

            entity.Property(e => e.Contrasenia)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Correo)
                .HasMaxLength(150)
                .IsUnicode(false);
            entity.Property(e => e.Nombre)
                .HasMaxLength(100)
                .IsUnicode(false);

            entity.HasOne(d => d.IdClienteNavigation).WithOne(p => p.Usuario)
                .HasForeignKey<Usuario>(d => d.IdCliente)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("FK__Usuario__IdClien__4AB81AF0");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
