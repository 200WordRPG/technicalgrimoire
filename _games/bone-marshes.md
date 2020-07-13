---
date: 2020-04-01
layout: project
title: The Bone Marshes
redirect_from:
  - "/bmchargen"
caption: >
  A Hex-Mapping Adventure About Getting Lost
  <br>
  (For D&D and OSR games)
screenshot:
  src: images/posts/bonemarshes_KS.jpg
image: images/posts/bonemarshes_KS.jpg
hide_description: true
permalink: bone-marshes
featured: false
---

The Bone Marshes is a tabletop adventure about getting lost in a burning marsh. It’s tailor-made for groups that enjoy exploring complex spaces and drawing maps. 

Also check out the Bone Marshes sequel: [Marsh Goons](/marsh-goons)!

<div class="row centerButtons">
  <div class="col-md-6 col-6">
<a class="btn bonemarshes-btn" href="https://gum.co/lCpIs" target="_blank"><h3>PDF: $10</h3></a>
  </div>
  <div class="col-md-6 col-6">
    <a class="btn bonemarshes-btn" href="https://www.drivethrurpg.com/product/275159/Bone-Marshes" target="_blank">
      <h3>Print+PDF: $20</h3>
    </a>
  </div>
  <div class="col-md-6 col-6">
    <a class="btn bonemarshes-btn" href="/files/BoneMarshes_CharacterSheets.pdf" target="_blank">
      <h3>Character Sheet</h3>
    </a>
  </div>
  <div class="col-6">
    <button id="CharButton" class="btn bonemarshes-btn" onclick="generate()">
      <h3>Generate Character</h3>
    </button>  
    </div>
      <p><small>Still need the old handouts? <a href="/files/BoneMarshes_Handouts.pdf">DOWNLOAD</a></small></p>
</div>

<div class="container bonemarshesCard" id="charCard">
  <div style="display:flex;justify-content:space-between;">
    <h1 id="charName" style="margin-top:0px;">Johnny</h1>
    <button id="downloadBTN" class="btn bonemarshes-btn-sm data-html2canvas-ignore" onclick="saveCharacterIMG()" style="width:160px;margin-bottom:auto;">
      <p style="margin-bottom: 0;">DOWNLOAD</p>
    </button>
  </div>
  <div class="row">
		<div class="col-6"><h3 id="charHP"></h3></div>
		<div class="col-6"><h3>Lvl: 1</h3></div>
  </div>
  <p id="charHistory"></p>
  <div class="row">
  	<div class="col-md-3 col-6" id="charVirtue"></div>
		<div class="col-md-3 col-6" id="charVice"></div>
		<div class="col-md-3 col-6" id="charPhysique"></div>
		<div class="col-md-3 col-6" id="charSkin"></div>
		<div class="col-md-3 col-6" id="charFace"></div>
		<div class="col-md-3 col-6" id="charHair"></div>
		<div class="col-md-3 col-6" id="charSpeech"></div>
		<div class="col-md-3 col-6" id="charClothing"></div>
		<div class="col-md-6 col-6" id="charSmell"></div>
		<div class="col-md-6 col-6" id="charAllergy"></div>
	</div>
  <hr>
  <div class="row">
		<div class="col-md col-6"><h3 id="charSTR"></h3></div>
		<div class="col-md col-6"><h3 id="charDEX"></h3></div>
		<div class="col-md col-6"><h3 id="charCON"></h3></div>
		<div class="col-md col-6"><h3 id="charINT"></h3></div>
		<div class="col-md col-6"><h3 id="charWIS"></h3></div>
		<div class="col-md col-6"><h3 id="charCHA"></h3></div>
	</div>
  <p style="text-align: right;margin-bottom:0px;"><small><i>You may swap any two ability bonuses</i></small></p>
  <hr>
  <h2 id="charEquip">Equipment</h2>
  <p>You can choose from <strong>any or all</strong> of the items below to fill your inventory slots. Unless otherwise noted, each item takes up one slot.</p>
  <p id="charItems"></p>
</div>

> "Easily one of the best. A 'real' adventure, and there’s not many of those out there." - [tenfootpole.org](https://tenfootpole.org/ironspike/?p=6116)

> "Its content will provide a gaming group with many sessions of entertainment and tales to regal. Bone Marshes is a good investment and a worthwhile quest to take on." - [Rolling Boxcars](https://rollingboxcars.com/2019/09/18/mapping-out-david-schirduans-bone-marshes/)

## The Marshes are burning, and we don't know why...

The Bone Marshes is an adventure filled with mapping and exploration challenges for the players. It uses special time-keeping and travel rules with player handouts to keep everyone engaged and on the same page in this topsy-turvey land.

The Bone Marshes is a three part adventure module, each of which can be run separately or consecutively. Each part provides 2-4 sessions of gameplay.

**Part I**: The marshes burn from constant daylight. The sun still rises and sets, but daylight remains constant, sun or no. The mage Azimech recently discovered this terrible situation and has put out a call for adventurers to map safe routes through the flaming swamp.

**Part II**: After the caravan has arrived (thanks to your mapping skills), Azimech needs you to head back out and discover the source of the constant daylight.

**Part III**: Now that she knows the root cause of the problem, she thinks there is a solution. It involves plumbing the depths of the tunnels beneath the marshes, plundering an ancient vault, and returning with valuable artifacts.

![BM_Marketing_1.png](/images/posts/BM_Marketing_1.png)
![BM_Marketing_2.png](/images/posts/BM_Marketing_2.png)
![BM_Marketing_3.png](/images/posts/BM_Marketing_3.png)
![BM_Marketing_4.png](/images/posts/BM_Marketing_4.png)
![BM_Marketing_4.png](/images/posts/BM_Marketing_5.png)
![BM_Marketing_6.png](/images/posts/BM_Marketing_6.png)
![BM_Marketing_7.png](/images/posts/BM_Marketing_7.png)

<script async src="/assets/js/html2canvas.min.js"></script>
<script async src="/assets/generator_resources/bm_generator.js" charset="utf-8"></script>