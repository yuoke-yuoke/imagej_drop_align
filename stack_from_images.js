//this code works like this;
//make a stock from a subfolder


importClass(Packages.ij.IJ);
importClass(Packages.ij.ImagePlus);
importClass(Packages.ij.process.ImageProcessor);
importClass(Packages.ij.io.FileSaver);
importClass(Packages.ij.plugin.Colors);

var folderPath = "C:/Users/inuko/OneDrive/lab_research/230605_destination";

//var folder_destination = "C:/Users/inuko/OneDrive/lab_research/230603_crystall_gif";
var folder = new File(folderPath);
var folders = folder.list()


for (var i = 0; i<folders.length; i++){
//for (var i = 12; i<folders.length; i++){
//for (var i = 0; i<2; i++){
//for (var i =3; i<4; i++){


	var folderName = folders[i];
	var folderDir = folderPath + "/" + folderName;
	var folderSomething = new File(folderDir); 
	
	var files = folderSomething.list();

	IJ.log(folderDir);

	images = new Array(files.length);

	for (var j = 0; j<files.length; j++){
		var fileName = files[j];
		var fileDir = folderDir + "/" + fileName;
		images[j] = IJ.openImage(fileDir); 

	}

	stack = ImagesToStack.run(images);
	stack.show()


//	IJ.run("Animation Options...", "Speed (0.1-1000 fps) =3");

	IJ.run("Scale Bar...", "width=1 height=50 font=60 color=White background=None location=[Lower Right] bold overlay label");
	IJ.run("Animation Options...", "speed=2 first=1 last=22");




	//stack_to_save = stack.getProcessor();
	var newDir = folderPath + "/" + "finals_16" + "/final_stack_" + folderName + ".gif";
	IJ.save(stack, newDir);


	//if (stack != null){stack.show();}
	IJ.log(folderName + "done");


}







