import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-turtle-trot-build',
  templateUrl: './turtle-trot-build.component.html',
  styleUrls: ['./turtle-trot-build.component.css']
})
export class TurtleTrotBuildComponent implements OnInit, AfterViewInit {
    /**
     * take the Reference of the container.
     */
    @ViewChild('webglContainer') webglContainer: ElementRef;

    constructor() {}

    ngOnInit(): void {}
    ngAfterViewInit(): void {
        var buildUrl = 'assets/Turtle Trot Build/Build';
        var config = {
            dataUrl: buildUrl + '/webgl.data',
            frameworkUrl: buildUrl + '/webgl.framework.js',
            codeUrl: buildUrl + '/webgl.wasm',
            streamingAssetsUrl: 'StreamingAssets',
            companyName: 'Mobazy',
            productName: 'Turtle Trot)',
            productVersion: '0.1.0',
            devicePixelRatio: 0,
        };

        let container = document.querySelector('#unity-container') || new Element();
        var canvas: HTMLElement = document.querySelector('#unity-canvas') || new HTMLElement();
        var loadingBar: HTMLElement = document.querySelector('#unity-loading-bar') || new HTMLElement();
        var progressBarFull: HTMLElement = document.querySelector('#unity-progress-bar-full') || new HTMLElement();
        var fullscreenButton: HTMLElement = document.querySelector('#unity-fullscreen-button') || new HTMLElement();

        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            // Mobile device style: fill the whole browser client area with the game canvas:

            var meta = document.createElement('meta');
            meta.name = 'viewport';
            meta.content =
                'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
            document.getElementsByTagName('head')[0].appendChild(meta);
            container.className = 'unity-mobile';
            canvas.className = 'unity-mobile';

            // To lower canvas resolution on mobile devices to gain some
            // performance, uncomment the following line:
            // config.devicePixelRatio = 1;
        } else {
            // Desktop style: Render the game canvas in a window that can be maximized to fullscreen:

            canvas.style.width = '600px';
            canvas.style.height = '960px';
        }

        loadingBar.style.display = 'block';
        var script = document.createElement('script');
        script.async = false;
        script.type = 'text/javascript';
        script.src = 'assets/Turtle Trot Build/Build/webgl.loader.js';
        script.onload = () => {
            createUnityInstance(canvas, config, (progress: any) => {
                progressBarFull.style.width = 100 * progress + '%';
            })
                .then((unityInstance: any) => {
                    loadingBar.style.display = 'none';
                    fullscreenButton.onclick = () => {
                        unityInstance.SetFullscreen(1);
                    };
                })
                .catch((message: any) => {
                    alert(message);
                });
        };
        this.webglContainer.nativeElement.appendChild(script);
    }
}