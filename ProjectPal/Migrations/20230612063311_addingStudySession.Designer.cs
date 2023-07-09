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
    [Migration("20230612063311_addingStudySession")]
    partial class addingStudySession
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.16");

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex");

                    b.ToTable("AspNetRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ClaimType")
                        .HasColumnType("TEXT");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("TEXT");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ClaimType")
                        .HasColumnType("TEXT");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasMaxLength(128)
                        .HasColumnType("TEXT");

                    b.Property<string>("ProviderKey")
                        .HasMaxLength(128)
                        .HasColumnType("TEXT");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("RoleId")
                        .HasColumnType("TEXT");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("LoginProvider")
                        .HasMaxLength(128)
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasMaxLength(128)
                        .HasColumnType("TEXT");

                    b.Property<string>("Value")
                        .HasColumnType("TEXT");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("ProjectPal.Data.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsAdministrator")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("INTEGER");

                    b.Property<long?>("LockoutEnd")
                        .HasColumnType("INTEGER");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("TEXT");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("TEXT");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("INTEGER");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("TEXT");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("INTEGER");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex");

                    b.ToTable("AspNetUsers", (string)null);
                });

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

            modelBuilder.Entity("ProjectPal.Data.StudySession", b =>
                {
                    b.Property<int>("StudySessionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<long>("DateStudied")
                        .HasColumnType("INTEGER");

                    b.Property<int>("MinutesStudied")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Notes")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Topic")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("UserCreatedId")
                        .HasColumnType("TEXT");

                    b.HasKey("StudySessionId");

                    b.HasIndex("UserCreatedId");

                    b.ToTable("StudySessions");
                });

            modelBuilder.Entity("ProjectPal.Data.StudySessionLink", b =>
                {
                    b.Property<int>("StudySessionLinkId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<long>("DateCreated")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Href")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int?>("StudySessionId")
                        .HasColumnType("INTEGER");

                    b.HasKey("StudySessionLinkId");

                    b.HasIndex("StudySessionId");

                    b.ToTable("StudySessionLink");
                });

            modelBuilder.Entity("ProjectPal.Data.StudySessionTag", b =>
                {
                    b.Property<int>("StudySessionTagId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<long>("DateCreated")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("StudySessionId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("TagText")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("StudySessionTagId");

                    b.HasIndex("StudySessionId");

                    b.ToTable("StudySessionTag");
                });

            modelBuilder.Entity("ProjectPal.Data.Thought", b =>
                {
                    b.Property<int>("ThoughtId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<long>("DateCreated")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Text")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("UserCreatedId")
                        .HasColumnType("TEXT");

                    b.HasKey("ThoughtId");

                    b.HasIndex("UserCreatedId");

                    b.ToTable("Thoughts");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("ProjectPal.Data.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("ProjectPal.Data.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ProjectPal.Data.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("ProjectPal.Data.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ProjectPal.Data.RawMaterial", b =>
                {
                    b.HasOne("ProjectPal.Data.Project", null)
                        .WithMany("RawMaterials")
                        .HasForeignKey("ProjectId");
                });

            modelBuilder.Entity("ProjectPal.Data.StudySession", b =>
                {
                    b.HasOne("ProjectPal.Data.ApplicationUser", "UserCreated")
                        .WithMany()
                        .HasForeignKey("UserCreatedId");

                    b.Navigation("UserCreated");
                });

            modelBuilder.Entity("ProjectPal.Data.StudySessionLink", b =>
                {
                    b.HasOne("ProjectPal.Data.StudySession", null)
                        .WithMany("Links")
                        .HasForeignKey("StudySessionId");
                });

            modelBuilder.Entity("ProjectPal.Data.StudySessionTag", b =>
                {
                    b.HasOne("ProjectPal.Data.StudySession", null)
                        .WithMany("Tags")
                        .HasForeignKey("StudySessionId");
                });

            modelBuilder.Entity("ProjectPal.Data.Thought", b =>
                {
                    b.HasOne("ProjectPal.Data.ApplicationUser", "UserCreated")
                        .WithMany()
                        .HasForeignKey("UserCreatedId");

                    b.Navigation("UserCreated");
                });

            modelBuilder.Entity("ProjectPal.Data.Project", b =>
                {
                    b.Navigation("RawMaterials");
                });

            modelBuilder.Entity("ProjectPal.Data.StudySession", b =>
                {
                    b.Navigation("Links");

                    b.Navigation("Tags");
                });
#pragma warning restore 612, 618
        }
    }
}