//this program works like this;
//open a stack and split it to images and save them

importClass(Packages.ij.IJ);
importClass(Packages.ij.ImagePlus);
importClass(Packages.ij.process.ImageProcessor);
importClass(Packages.ij.io.FileSaver);
importClass(Packages.ij.plugin.Colors);


var folderPath = "C:/Users/inuko/OneDrive/lab_research/230603_crystall_gif";

var folder = new File(folderPath);

var folders = folder.list();

//var daylist =  ['18', '16', '15', '12', '11', '09', '08', '05', '04', '02', '01'];
var daylist12 = ['16', '15', '12', '11', '09', '08', '05', '04', '02', '01'];
var daylist =  ['44', '38', '37', '36', '30', '29', '26', '25', '23', '22', '19', '18', '16', '15', '12', '11', '09', '08', '05', '04', '02', '01'];
var daylist_ = ['09', '08', '05', '04', '02', '01'];


var days_whole = daylist.length;
var days_part  = daylist_.length;
var days_12    = daylist12.length;


for (var i = 0; i<folders.length; i++){
//for (var i = 0; i<2; i++){

	IJ.log(i)
	var folderName = folders[i];
	var folderDir = folderPath + "/" + folderName;
	var folderSomething = new File(folderDir); 
	var files = folderSomething.list();

	if (files.length == 1){

		var days = days_whole;
		var list = daylist;
		if (i == 8 || i == 11 || i == 14){days = days_part; list = daylist_}
//		if (i == 0 || i == 1){days = days_12; list = daylist12}


//		stack = IJ.openStack(folderPath + "/" + folderName + "/" + files[0]);
//		IJ.log(folderPath + "/" + folderName + "/" + files[0]);
		var filepath = folderPath + "/" + folderName + "/" + files[0]
		IJ.open(filepath);



		IJ.run("Stack to Images");






		for (var j = 0; j<daylist.length; j++){

			if ((i == 8 || i == 11 || i == 14) && (j<days_whole - days_part)){
				IJ.run("Close");
			}else{
				IJ.saveAs("Tiff", folderDir + "/day" + daylist[j] + "_" + folderName );
				IJ.run("Close");
//				IJ.close();
			}


		
		}
//		}

		


	}



//ImagesToStack














}

IJ.log("program finished");














