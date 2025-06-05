import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { CodeDialogComponent } from './code-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatIconModule,
  ],
  template: `
    <div class="app-container">
      <!-- Header / Navbar -->
      <mat-toolbar class="navbar" color="primary">
        <div class="navbar-content">
          <h1 class="navbar-title">Angular Material Showcase</h1>
          <button
            mat-button
            [matMenuTriggerFor]="componentsMenu"
            class="menu-button"
          >
            Components
            <mat-icon>arrow_drop_down</mat-icon>
          </button>
          <mat-menu #componentsMenu="matMenu">
            <button mat-menu-item (click)="showToast('You clicked Hero')">
              Hero
            </button>
            <button mat-menu-item (click)="showToast('You clicked FAQ')">
              FAQ
            </button>
          </mat-menu>
        </div>
      </mat-toolbar>

      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-background"></div>
        <div class="hero-content">
          <h2 class="hero-title">Beautifully crafted components</h2>
          <p class="hero-description">
            Built with Angular Material, following Material Design principles.
          </p>
          <button
            mat-raised-button
            color="primary"
            class="hero-button"
            (click)="openCodeDialog()"
          >
            Show live code
          </button>
        </div>
      </section>

      <!-- Features / Tabs -->
      <section class="features-section">
        <div class="features-container">
          <h2 class="section-title">Features</h2>
          <mat-tab-group class="features-tabs" dynamicHeight>
            <mat-tab label="Angular">
              <div class="tab-content">
                <div class="features-grid">
                  <mat-card
                    *ngFor="let feature of angularFeatures"
                    class="feature-card"
                  >
                    <mat-card-header>
                      <mat-icon mat-card-avatar>{{ feature.icon }}</mat-icon>
                      <mat-card-title>{{ feature.title }}</mat-card-title>
                      <mat-card-subtitle>{{ feature.desc }}</mat-card-subtitle>
                    </mat-card-header>
                    <mat-card-content>
                      <button
                        mat-stroked-button
                        (click)="showToast(feature.title)"
                      >
                        Try it
                      </button>
                    </mat-card-content>
                  </mat-card>
                </div>
              </div>
            </mat-tab>
            <mat-tab label="Accessibility">
              <div class="tab-content">
                <mat-card class="single-feature-card">
                  <mat-card-header>
                    <mat-card-title>WCAG compliant</mat-card-title>
                    <mat-card-subtitle>
                      All components follow accessibility guidelines out of the
                      box.
                    </mat-card-subtitle>
                  </mat-card-header>
                </mat-card>
              </div>
            </mat-tab>
            <mat-tab label="Customize">
              <div class="tab-content">
                <mat-card class="single-feature-card">
                  <mat-card-header>
                    <mat-card-title>Material Design first</mat-card-title>
                    <mat-card-subtitle>
                      Customize via Angular Material theming system.
                    </mat-card-subtitle>
                  </mat-card-header>
                </mat-card>
              </div>
            </mat-tab>
          </mat-tab-group>
        </div>
      </section>

      <!-- FAQ / Accordion -->
      <section class="faq-section">
        <div class="faq-container">
          <h2 class="section-title">FAQ</h2>
          <mat-accordion class="faq-accordion">
            <mat-expansion-panel>
              <mat-expansion-panel-header>
                <mat-panel-title>Is this production‑ready?</mat-panel-title>
              </mat-expansion-panel-header>
              <p>Absolutely! Angular Material is battle‑tested.</p>
            </mat-expansion-panel>
            <mat-expansion-panel>
              <mat-expansion-panel-header>
                <mat-panel-title>
                  Can I tree‑shake unused components?
                </mat-panel-title>
              </mat-expansion-panel-header>
              <p>Yes – Angular's build system optimizes bundles automatically.</p>
            </mat-expansion-panel>
          </mat-accordion>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <p class="footer-text">
          Built with <strong>Angular Material</strong> — © 2025
        </p>
      </footer>
    </div>
  `,
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent {
  angularFeatures = [
    {
      title: 'TypeScript',
      desc: 'Fully typed components.',
      icon: 'code',
    },
    {
      title: 'Reactive',
      desc: 'RxJS powered interactions.',
      icon: 'sync',
    },
    {
      title: 'Modular',
      desc: 'Import only what you need.',
      icon: 'layers',
    },
  ];

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  showToast(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }

  openCodeDialog(): void {
    this.dialog.open(CodeDialogComponent, {
      width: '600px',
      maxWidth: '90vw',
    });
  }
}