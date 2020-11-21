class DustBin{

	constructor(x,y,width,height){
		this.x = x;
		this.y = y;
		this.dustBinwidth = width;
		this.dustBinheight = height;
		this.wallThickness = 20;

		this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustBinwidth,this.dustBinheight,{isStatic : true});
		World.add(world, this.bottomBody);

		//this.leftWallBody = Bodies.rectangle(this.x - this.dustBinwidth/2, this.y - this.dustBinheight/2,this.wallThickness, this.dustBinheight,{isStatic : true});		
		this.leftWallBody = Bodies.rectangle(this.x - this.dustBinwidth/2, this.y - this.dustBinheight/2,this.wallThickness, this.dustBinheight,{isStatic : true});		
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		World.add(world, this.leftWallBody);

		this.rightWallBody =  Bodies.rectangle(this.x + this.dustBinwidth/2, this.y - this.dustBinheight/2, this.wallThickness, this.dustBinheight,{isStatic : true});
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);		
		World.add(world, this.rightWallBody);
				
	}
	
	  display(){

	   var bottompos = this.bottomBody.position;
	   var rightpos = this.rightWallBody.position;
	  var leftpos = this.leftWallBody.position;

	   push();
	   translate(bottompos.x, bottompos.y);
	   rectMode(CENTER);
	   angleMode(RADIANS);
	   //this.color = 255;
	   fill("yellow");
	   rect( 0, 0, this.dustBinwidth,this.wallThickness);
	   pop();



	   push();
	   translate(rightpos.x, rightpos.y);
	   rectMode(CENTER);
	   angleMode(RADIANS);
	   fill("yellow");
	   rect( 0, 0,this.wallThickness,this.dustBinheight);
	   pop();



	   push();
	   translate(leftpos.x, leftpos.y);
	   rectMode(CENTER);
	   angleMode(RADIANS);
	   fill("yellow");
	   rect( 0, 0,this.wallThickness, this.dustBinheight);
	   pop();

	 }

}



/*

class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=100;
		this.wallThickness=20;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}
*/
