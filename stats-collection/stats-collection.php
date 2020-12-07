<?php

// wifi status
while (1) {
	// print_r( sprintf("%.4f", microtime(true)) . "\n" );
	$r = shell_exec("iwconfig 2>/dev/null");

	preg_match("/(Link Quality)=([0-9\/]+)/mi", $r, $linkQuality);
	preg_match("/(Signal level)=([0-9\/]+)/mi", $r, $signalLevel);
	preg_match("/(Noise level)=([0-9\/]+)/mi", $r, $noiseLevel);

	array_shift($linkQuality);
	array_shift($signalLevel);
	array_shift($noiseLevel);

	$status = [
		"linkQuality" => $linkQuality[1],
		"signalLevel" => $signalLevel[1],
		"noiseLevel" => $noiseLevel[1],
	];
	// $status = json_encode($status);

	print_r($status);


	sleep(1);
}
