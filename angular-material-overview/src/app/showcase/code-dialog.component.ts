import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-code-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <div class="dialog-container">
      <h2 mat-dialog-title>Live code example</h2>
      <mat-dialog-content>
        <p class="dialog-description">
          Here's where you could embed StackBlitz or CodeSandbox.
        </p>
        <pre class="code-block"><code>{{ codeExample }}</code></pre>
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button mat-button (click)="close()">Close</button>
        <button mat-raised-button color="primary" (click)="close()">
          Copy Code
        </button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [
    `
      .dialog-container {
        min-width: 400px;
      }

      .dialog-description {
        margin-bottom: 16px;
        color: rgba(0, 0, 0, 0.6);
      }

      .code-block {
        background-color: #f5f5f5;
        border-radius: 4px;
        padding: 16px;
        font-family: 'Courier New', monospace;
        font-size: 0.875rem;
        overflow-x: auto;
        border: 1px solid #e0e0e0;
      }

      mat-dialog-actions {
        margin-top: 16px;
      }
    `,
  ],
})
export class CodeDialogComponent {
  codeExample = `<button mat-raised-button 
        color="primary" 
        (click)="showToast('Hello world!')">
  Toast
</button>`;

  constructor(private dialogRef: MatDialogRef<CodeDialogComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
