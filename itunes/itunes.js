exports.action = function(data, callback, config, SARAH) {
  
  var exec = require('child_process').exec;

  config = config.modules.itunes;

  var playlist1 = config.Playlist1;
  var playlist2 = config.Playlist2;
  var playlist3 = config.Playlist3;


  var process = '';

  switch(data.prog)
	{
	case "play":
	  process = '%CD%/plugins/itunes/bin/iTunes/play.vbs';
	  break;
	case "stop":
	  process = '%CD%/plugins/itunes/bin/iTunes/Stop.vbs';
	  break;
	case "pause":
	  process = '%CD%/plugins/itunes/bin/iTunes/Pause.vbs';
	  break;
	case "fastforward":
	  process = '%CD%/plugins/itunes/bin/iTunes/FastForward.vbs';
	  break;
	case "rewind":
	  process = '%CD%/plugins/itunes/bin/iTunes/Rewind.vbs';
	  break;
	case "next":
	  process = '%CD%/plugins/itunes/bin/iTunes/Next.vbs';
	  break;
	case "previous":
	  process = '%CD%/plugins/itunes/bin/iTunes/Previous.vbs';
	  break;
	case "Mute":
	  process = '%CD%/plugins/itunes/bin/iTunes/Mute.vbs';
	  break;
	case "list1":
	  process = '%CD%/plugins/itunes/bin/iTunes/PlayPlaylist.vbs ' + playlist1;
	  break;
	case "list2":
	  process = '%CD%/plugins/itunes/bin/iTunes/PlayPlaylist.vbs ' + playlist2;
	  break;
	case "list3":
	  process = '%CD%/plugins/itunes/bin/iTunes/PlayPlaylist.vbs ' + playlist3;
	  break;
	case "Up":
	  process = '%CD%/plugins/itunes/bin/iTunes/VolumeUp.vbs';
	  break;
	case "Down":
	  process = '%CD%/plugins/itunes/bin/iTunes/VolumeDown.vbs';
	  break;
	case "100":
	  process = '%CD%/plugins/itunes/bin/iTunes/SetVolume.vbs 100';
	  break;
	case "70":
	  process = '%CD%/plugins/itunes/bin/iTunes/SetVolume.vbs 70';
	  break;
	case "50":
	  process = '%CD%/plugins/itunes/bin/iTunes/SetVolume.vbs 50';
	  break;
	case "25":
	  process = '%CD%/plugins/itunes/bin/iTunes/SetVolume.vbs 25';
	  break;
	case "0":
	  process = '%CD%/plugins/itunes/bin/iTunes/SetVolume.vbs 0';
	  break;
	default:
	  process = '';
	  break;
	}

  console.log(process);
	if(process!=''){
	  var child = exec(process,
	  function (error, stdout, stderr) {
		if (error !== null) {
		  console.log('exec error: ' + error);
		}
	  }); 
	  
	  callback({});
  }else{
		callback({});
  }
}