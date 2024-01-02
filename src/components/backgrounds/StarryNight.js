import React, { useEffect } from 'react';
import '../../styles/StarryNight.css'
import p5 from 'p5';

const StarryNight = () => {
	useEffect(() => {
		let time = 0;
		let stars = [];

		class Star {
			constructor() {
				this.x = Math.random() * window.outerWidth;
				this.y = Math.random() * window.outerHeight;
				this.brightness = Math.random() * 255;
				this.inc = Math.random() * (5 - 3) + 3; // Random value between 3 and 5
				if (Math.random() < 0.5) this.inc *= -1;
			}

			display() {
				this.brightness += this.inc;

				if (this.brightness >= 255) {
					this.inc *= -1;
				}
				else if (this.brightness <= 0) {
					this.inc *= -1;
					this.x = Math.random() * window.outerWidth;
					this.y = Math.random() * window.outerHeight;
				}
			}
		}

		const sketch = (p) => {
			p.setup = () => {
				p.createCanvas(window.outerWidth, window.outerHeight, p.WEBGL);

				for (let a = 0; a < 25; ++a)
					stars.push(new Star());
			};

			p.draw = () => {
				p.clear();
				p.fill(0);
				p.rect(-p.width / 2, -p.height / 2, p.width, p.height);
				p.noStroke();

				let clr = Math.sin(time) * 50 + 10;
				for (let d = clr + 150; d >= 0; --d) {
					p.fill(128 - (d / (clr + 150)) * 128);
					p.circle(-p.width / 2, -p.height / 2, d * (p.height / 80));
				}

				time += 0.005;

				for (let a = 0; a < stars.length; ++a) {
					stars[a].display();

					p.fill(255, 255, 255, stars[a].brightness);
					p.noStroke();

					let x = stars[a].x - (p.width / 2);
					let y = stars[a].y - (p.height / 2);

					p.circle(x, y, 2.5);
					/*
					let radius1 = 5;
					let radius2 = 1.5;
					let npoints = 4;
					let angle = p.TWO_PI / npoints;
					p.beginShape();
					for (let a = -p.PI/4; a < p.TWO_PI; a += angle) {
						let sx = x + p.cos(a) * radius2;
						let sy = y + p.sin(a) * radius2;
						p.curveVertex(sx, sy);

						let ex = x + p.cos(a + angle/2) * radius1;
						let ey = y + p.sin(a + angle/2) * radius1;
						p.curveVertex(ex, ey);
					}
					p.endShape(p.CLOSE);
					*/

					if (p.dist(stars[a].x, stars[a].y, p.mouseX, p.mouseY) < 200) {
						p.stroke(255);
						p.strokeWeight(1.5);
						p.line(stars[a].x - (p.width / 2), stars[a].y - (p.height / 2), p.mouseX - (p.width / 2), p.mouseY - (p.height / 2));
					}
				}
			};
		};

		new p5(sketch);

		return () => {
			// Cleanup function if needed
		};
	}, []); // Empty dependency array ensures the effect runs only once

	return <div>{/* Additional content related to P5Main */}</div>;
};

export default StarryNight;