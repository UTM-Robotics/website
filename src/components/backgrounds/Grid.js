import React, { useEffect } from 'react';
import p5 from 'p5';

const Grid = () => {
	useEffect(() => {
		const sketch = (p) => {
			let points = [];
			let anchors = [];
			let sep = 30;
	
			class Point
			{
				constructor(x, y)
				{
					this.x = x;
					this.y = y;
				}
			}
	
			class Anchor
			{
				constructor(x, y, clr, inc)
				{
					this.x = x;
					this.y = y;
					this.points = [];
					this.lines = [];
	
					this.clr = clr;
					this.inc = inc;
				}
			}
			
			p.setup = () => {
				p.createCanvas(window.windowWidth - 17, window.windowWidth);

				for (let i = 0; i < p.height / sep; ++i)
				{
					for (let j = 0; j < p.width / sep; ++j)
					{
						points.push(new Point(
							(j * sep) + (sep / 2),
							(i * sep) + (sep / 2)
						));
					}
				}
			
				for (let i = 0; i < 15; ++i) {
					let clr = p.random(200);
					let inc = p.random(2, 4);
					if (p.random(1) > 0.5)
						inc *= -1;
					anchors.push(new Anchor(p.random(p.width), p.random(p.height), clr, inc));
				}
			
				for (let i = 0; i < points.length; ++i)
				{
					let x = 0;
					for (let j = 1; j < anchors.length; ++j)
					{
						if (p.dist(points[i].x, points[i].y, anchors[j].x, anchors[j].y) < 
						p.dist(points[i].x, points[i].y, anchors[x].x, anchors[x].y))
							x = j;
					}
			
					anchors[x].points.push(points[i]);
				}
			
				for (let i = 0; i < anchors.length; ++i)
				{
					let lines = [], d = {};
					for (let j = 0; j < anchors[i].points.length - 1; ++j)
					{
						for (let k = j + 1; k < anchors[i].points.length; ++k)
						{
							if ((anchors[i].points[j].y === anchors[i].points[k].y && 
								 anchors[i].points[j].x === anchors[i].points[k].x - sep) ||
								(anchors[i].points[j].x === anchors[i].points[k].x && 
								 anchors[i].points[j].y === anchors[i].points[k].y - sep))
							{
								let v1 = p.createVector(anchors[i].points[j].x, anchors[i].points[j].y);
								let v2 = p.createVector(anchors[i].points[k].x, anchors[i].points[k].y);
								lines.push([ v1, v2 ]);
			
								if (v1 in d)
									d[v1]++;
								else
									d[v1] = 1;
								
								if (v2 in d)
									d[v2]++;
								else
									d[v2] = 1;
							}
						}
					}
			
					for (let j = 0; j < lines.length; ++j)
					{
						if (d[lines[j][0]] < 4 || d[lines[j][1]] < 4)
							anchors[i].lines.push(lines[j]);
					}
				}
			};

			p.draw = () => {
				p.noFill();
				p.strokeWeight(1);
				for (let i = 0; i < points.length; ++i) {
					p.stroke(255 - p.dist(p.mouseX, p.mouseY, points[i].x, points[i].y));
					p.circle(points[i].x, points[i].y, 13, 13);
				}
				
				p.strokeWeight(3);
				for (let i = 0; i < anchors.length; ++i) {
					p.stroke(anchors[i].clr);
					anchors[i].clr += anchors[i].inc;
					if (anchors[i].clr < 0 || anchors[i].clr > 200)
						anchors[i].inc *= -1;

					for (let i = 0; i < anchors[i].lines.length; ++i)
					{
						p.line(anchors[i].lines[i][0].x, anchors[i].lines[i][0].y,
							   anchors[i].lines[i][1].x, anchors[i].lines[i][1].y);
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

export default Grid;
