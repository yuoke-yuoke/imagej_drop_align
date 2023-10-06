// this program works like this;
// making a stack from each subfolder and do stackreg twice for each stack 
// but taks freaking long time

importClass(Packages.ij.IJ);
importClass(Packages.ij.ImagePlus);
importClass(Packages.ij.process.ImageProcessor);
importClass(Packages.ij.io.FileSaver);
importClass(Packages.ij.plugin.Colors);

var folder_source = "C:/Users/inuko/OneDrive/lab_research/230530_crystallization_imageJ";
var folder_destination = "C:/Users/inuko/OneDrive/lab_research/230603_crystall_gif";
var folder = new File(folder_source);
var folders = folder.list()

for (var i=0; i<18; i++){
//for (var i = 0; i<folders.length; i++){
//for (var i = 0; i<2; i++){
	var folderName = folders[i];
	var folderDir = folder_source + "/" + folderName;
	var folderSomething = new File(folderDir); 
	
	var files = folderSomething.list();

	images = new Array(files.length);

	for (var j = 0; j<files.length; j++){
		var fileName = files[j];
		var fileDir = folderDir + "/" + fileName;
		images[j] = IJ.openImage(fileDir); 

	}

	stack = ImagesToStack.run(images);

	IJ.log("  1st stackreg" + folderName);

	IJ.run(stack, "StackReg ", "transformation=[Rigid Body]");
	IJ.log("  2nd stackreg" + folderName);
	IJ.run(stack, "StackReg ", "transformation=[Rigid Body]");

	//stack_to_save = stack.getProcessor();
	var newDir = folder_destination + "/" + folderName + "/bare_stack_" + folderName + ".tif";
	IJ.save(stack, newDir);


	//if (stack != null){stack.show();}
	IJ.log("  finish stackreg" + folderName);

}

