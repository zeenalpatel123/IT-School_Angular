import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-canvas',
  imports: [],
  templateUrl: './html-canvas.component.html',
  styleUrl: './html-canvas.component.scss'
})

export class HtmlCanvasComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Draw a Line on myCanvas2
    const canvas2 = document.getElementById("myCanvas2") as HTMLCanvasElement;
    if (canvas2) {
      const ctx2 = canvas2.getContext("2d");
      if (ctx2) {
        ctx2.moveTo(0, 0);
        ctx2.lineTo(200, 100);
        ctx2.stroke();
      }
    } else {
      console.error("Canvas #myCanvas2 not found");
    }

    // Draw a Circle on myCanvas3
    const canvas3 = document.getElementById("myCanvas3") as HTMLCanvasElement;
    if (canvas3) {
      const ctx3 = canvas3.getContext("2d");
      if (ctx3) {
        ctx3.beginPath();
        ctx3.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx3.stroke();
      }
    } else {
      console.error("Canvas #myCanvas3 not found");
    }

    // Draw a Text
    const canvas4 = document.getElementById("myCanvas4") as HTMLCanvasElement;
    if (canvas4) {
      const ctx4 = canvas4.getContext("2d");
      if (ctx4) {
        ctx4.font = "30px Arial";
        ctx4.fillText("Hello World", 10, 50);
      }
    } else {
      console.error("Canvas #myCanvas4 not found");
    }


    // Stroke Text
    const canvas5 = document.getElementById("myCanvas5") as HTMLCanvasElement;
    if (canvas5) {
      const ctx5 = canvas5.getContext("2d");
      if (ctx5) {
        ctx5.font = "30px Arial";
        ctx5.strokeText("Hello World", 10, 50);
      }
    } else {
      console.error("Canvas #myCanvas5 not found");
    }

    // gradient color6
    const canvas6 = document.getElementById("myCanvas6") as HTMLCanvasElement;
    if (canvas6) {
      const ctx6 = canvas6.getContext("2d");
      
      if (ctx6) {
        // Create gradient
        const grd = ctx6.createLinearGradient(0, 0, 200, 0);
        grd.addColorStop(0, "red");
        grd.addColorStop(1, "white");

        // Fill with gradient
        ctx6.fillStyle = grd;
        ctx6.fillRect(10, 10, 150, 80);
      } else {
        console.error("Failed to get 2D context for canvas.");
      }
    } else {
      console.error("Canvas element #myCanvas not found.");
    }

     // gradient color7
     const canvas7 = document.getElementById("myCanvas7") as HTMLCanvasElement;
      if (canvas7) {
        const ctx7 = canvas7.getContext("2d");

        if (ctx7) {
          // Create radial gradient (inner circle at 75,50 with radius 5, outer at 90,60 with radius 100)
          const grd = ctx7.createRadialGradient(75, 50, 5, 90, 60, 100);
          grd.addColorStop(0, "red");
          grd.addColorStop(1, "white");

          // Fill with gradient
          ctx7.fillStyle = grd;
          ctx7.fillRect(10, 10, 150, 80);
        } else {
          console.error("Failed to get 2D context for canvas.");
        }
      } else {
        console.error("Canvas element #myCanvas not found.");
      }



  }
}
