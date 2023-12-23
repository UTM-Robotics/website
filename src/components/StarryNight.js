import React, { useEffect } from 'react';
import p5 from 'p5';

const StarryNight = () => {
	useEffect(() => {
		let time = 0;
		let stars = [];

		class Star {
			constructor() {
				this.x = Math.random() * window.innerWidth;
				this.y = Math.random() * window.innerHeight;
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
					this.x = Math.random() * window.innerWidth;
					this.y = Math.random() * window.innerHeight;
				}
			}
		}

		const sketch = (p) => {
			p.setup = () => {
				p.createCanvas(window.innerWidth - 17, window.innerHeight);

				for (let a = 0; a < 50; ++a)
					stars.push(new Star());
			};

			p.draw = () => {
				p.clear();
				p.fill(0);
				p.rect(0, 0, p.width, p.height);
				p.noStroke();

				let clr = Math.sin(time) * 50 + 10;
				for (let d = clr + 150; d >= 0; --d) {
					p.fill(128 - (d / (clr + 150)) * 128);
					p.circle(0, 0, d * (p.height / 50));
				}

				time += 0.005;

				for (let a = 0; a < stars.length; ++a) {
					stars[a].display();

					p.fill(255, 255, 255, stars[a].brightness);
					p.noStroke();
					p.circle(stars[a].x, stars[a].y, 1.5);

					if (a % 2 === 0 && p.dist(stars[a].x, stars[a].y, p.mouseX, p.mouseY) < 200) {
						p.stroke(255);
						p.strokeWeight(2);
						p.line(stars[a].x, stars[a].y, p.mouseX, p.mouseY);
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
