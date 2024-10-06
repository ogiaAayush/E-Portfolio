import { Component, inject} from '@angular/core';
import { ModeService } from '../../../services/mode-service';
import { FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms"

@Component({
  selector: 'app-mode',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './mode.component.html',
  styleUrl: './mode.component.css'
})
export class ModeComponent {
  mode: any
  isDarkMode: boolean = true;

  constructor(private modeService: ModeService) {
    this.modeService.getMode().subscribe((isDark: boolean) =>{
      this.isDarkMode = isDark
    })
  }

  onToggleTheme(): void {
    this.modeService.toggleTheme()
  }
}
