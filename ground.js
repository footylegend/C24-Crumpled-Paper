
class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic : true 
        }

        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
    }

    display(){
        var groundpos = this.body.position;
        push();
        translate(groundpos.x, groundpos.y);
        rectMode(CENTER);
        fill("blue");
        rect( 0, 0, this.width, this.height);
        pop();
      }

}

/*
class ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,255,0)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}
*/