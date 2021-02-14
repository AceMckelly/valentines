function Board(){
	this.x=[];
	this.y=[];
	this.name=[];
	this.dir_x = [];
	this.dir_y = [];
	this.count = 0;
	
	this.img = document.getElementById("heart");
	
	this.create = function(){
		this.name[this.count] = document.getElementById("name").value;
		this.x[this.count] = Math.floor(Math.random()*200);
		this.y[this.count] = Math.floor(Math.random()*200);
		cc.drawImage(this.img,90,70,120,100);
		cc.fillStyle = 'white';
		cc.fillText(this.name[this.count],this.x[this.count],this.y[this.count]);
		if(this.count!=0){
			this.dir_x[this.count] = Math.pow(-1,Math.floor(Math.random()*2));
			this.dir_y[this.count] = Math.pow(-1,Math.floor(Math.random()*2));
		}else{
			this.dir_x[this.count] = 1;
			this.dir_y[this.count] = 1;
		}
		this.count = this.count + 1;
	}
	
	this.draw = function(){
		for(let i = 0; i<this.count;i++){
			cc.drawImage(this.img,this.x[i]-10,this.y[i]-20,50,50);
			cc.fillStyle = 'white';
			cc.fillText(this.name[i],this.x[i],this.y[i]);
		}
	}
	
	this.update = function(){
		for(let i = 0; i<this.count;i++){
			this.x[i] += this.dir_x[i];
			this.y[i] += this.dir_y[i];
			
			if(this.x[i]>c.width){
			this.dir_x[i] = this.dir_x[i]*-1;
			}else if(this.x[i]<0){
			this.dir_x[i] = this.dir_x[i]*-1;
			}
			
			if(this.y[i]>c.height){
			this.dir_y[i] = this.dir_y[i]*-1;
			}else if(this.y[i]<0){
			this.dir_y[i] = this.dir_y[i]*-1;
			}
			
		}
		
		
		
		
	}
}
