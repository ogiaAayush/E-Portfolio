import { Component} from '@angular/core';
import { ModeService } from '../../../services/mode-service';

@Component({
  selector: 'app-mode',
  standalone: true,
  imports: [],
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
