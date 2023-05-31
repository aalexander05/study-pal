﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ProjectPal.Data;

#nullable disable

namespace ProjectPal.Migrations
{
    [DbContext(typeof(ProjectPalContext))]
    [Migration("20230531065615_MoreData")]
    partial class MoreData
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.16");

            modelBuilder.Entity("ProjectPal.Data.Project", b =>
                {
                    b.Property<int>("ProjectId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("CreatedByUserId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("TEXT");

                    b.Property<int>("ModifiedByUserId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("ModifiedDate")
                        .HasColumnType("TEXT");

                    b.HasKey("ProjectId");

                    b.HasIndex("CreatedByUserId");

                    b.HasIndex("ModifiedByUserId");

                    b.ToTable("Projects");
                });

            modelBuilder.Entity("ProjectPal.Data.RawMaterial", b =>
                {
                    b.Property<int>("RawMaterialId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("Cost")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int?>("ProjectId")
                        .HasColumnType("INTEGER");

                    b.HasKey("RawMaterialId");

                    b.HasIndex("ProjectId");

                    b.ToTable("RawMaterials");

                    b.HasData(
                        new
                        {
                            RawMaterialId = 1,
                            Cost = 13.5m,
                            Name = "Dimensional Lumber - 2 X 4 X 8'"
                        },
                        new
                        {
                            RawMaterialId = 2,
                            Cost = 17.5m,
                            Name = "Dimensional Lumber - 2 X 6 X 8'"
                        },
                        new
                        {
                            RawMaterialId = 3,
                            Cost = 15.5m,
                            Name = "Dimensional Lumber - 4 X 4 X 8'"
                        });
                });

            modelBuilder.Entity("ProjectPal.Data.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("UserId");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            UserId = 1,
                            FullName = "AJ Alexander"
                        });
                });

            modelBuilder.Entity("ProjectPal.Data.Project", b =>
                {
                    b.HasOne("ProjectPal.Data.User", "CreatedByUser")
                        .WithMany()
                        .HasForeignKey("CreatedByUserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ProjectPal.Data.User", "ModifiedByUser")
                        .WithMany()
                        .HasForeignKey("ModifiedByUserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CreatedByUser");

                    b.Navigation("ModifiedByUser");
                });

            modelBuilder.Entity("ProjectPal.Data.RawMaterial", b =>
                {
                    b.HasOne("ProjectPal.Data.Project", null)
                        .WithMany("RawMaterials")
                        .HasForeignKey("ProjectId");
                });

            modelBuilder.Entity("ProjectPal.Data.Project", b =>
                {
                    b.Navigation("RawMaterials");
                });
#pragma warning restore 612, 618
        }
    }
}
