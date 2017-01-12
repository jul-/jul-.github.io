$( document ).ready(function() {

  var NavigationType = {
      NAVIGATION : 0,
      GRAPHIC : 1
  }

  var objectByString = function(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
      var k = a[i];
      if (k in o) {
        o = o[k];
      } else {
        return;
      }
    }
    return o;
  };

  var rebindNodeLinks = function() {
    $( '#node-link-rootnode2' ).one( 'click', function() {
      event.preventDefault();
      backToRoot(false);
      nodeRootTo2(NavigationType.NAVIGATION);
      $('.dropdown').removeClass('open');
      $('.nav-back-link').addClass('hidden');
    });
    $( '#node-link-rootnode2-mobile' ).one( 'click', function() {
      event.preventDefault();
      backToRoot(false);
      nodeRootTo2(NavigationType.NAVIGATION);
      $('.dropdown').removeClass('open');
      $('.nav-back-link').addClass('hidden');
    });
  };

  var initNodes = function() {
    node1Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node1Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node1Polygone2Mobile.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node1Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node1Polygone4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node1Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node1Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node1Circle3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node1Text1.attr( { visibility: 'hidden' } );
    node1Text2.attr( { visibility: 'hidden' } );
    node1Text3.attr( { visibility: 'hidden' } );
    node2Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node2Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node2Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node2Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node2Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node2Text1.attr( { visibility: 'hidden' } );
    node2Text2.attr( { visibility: 'hidden' } );
    node2Text3.attr( { visibility: 'hidden' } );
    node3Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node3Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node3Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node3Polygone4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node3Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node3Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node3Circle3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node3Text1.attr( { visibility: 'hidden' } );
    node3Text2.attr( { visibility: 'hidden' } );
    node3Text3.attr( { visibility: 'hidden' } );
    node3Text4.attr( { visibility: 'hidden' } );
    node4Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node4Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node4Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node4Polygone4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node4Polygone5.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node4Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node4Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node4Circle3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node4Circle4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node4Text1.attr( { visibility: 'hidden' } );
    node4Text2.attr( { visibility: 'hidden' } );
    node4Text3.attr( { visibility: 'hidden' } );
    node4Text4.attr( { visibility: 'hidden' } );
    node4Text5.attr( { visibility: 'hidden' } );
    node5Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node5Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node5Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node5Polygone4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node5Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node5Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node5Circle3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node5Text1.attr( { visibility: 'hidden' } );
    node5Text2.attr( { visibility: 'hidden' } );
    node5Text3.attr( { visibility: 'hidden' } );
    node5Text4.attr( { visibility: 'hidden' } );
  }

  var resetRootNode = function() {
    node1.attr( { visibility: 'hidden', transform: 's1,1' } );
    node1Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node1Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node1Polygone2Mobile.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node1Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node1Polygone4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node1Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node1Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node1Circle3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node1Text1.attr( { visibility: 'hidden' } );
    node1Text2.attr( { visibility: 'hidden' } );
    node1Text3.attr( { visibility: 'hidden' } );

    node2Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node2Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node2Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node2Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node2Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node2Text1.attr( { visibility: 'hidden' } );
    node2Text2.attr( { visibility: 'hidden' } );
    node2Text3.attr( { visibility: 'hidden' } );

    node3.attr( { visibility: 'hidden', transform: 's1,1' } );
    node3Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node3Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node3Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node3Polygone4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node3Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node3Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node3Circle3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node3Text1.attr( { visibility: 'hidden' } );
    node3Text2.attr( { visibility: 'hidden' } );
    node3Text3.attr( { visibility: 'hidden' } );
    node3Text4.attr( { visibility: 'hidden' } );

    node4.attr( { visibility: 'hidden', transform: 's1,1' } );
    node4Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node4Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node4Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node4Polygone4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node4Polygone5.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node4Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node4Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node4Circle3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node4Circle4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node4Text1.attr( { visibility: 'hidden' } );
    node4Text2.attr( { visibility: 'hidden' } );
    node4Text3.attr( { visibility: 'hidden' } );
    node4Text4.attr( { visibility: 'hidden' } );
    node4Text5.attr( { visibility: 'hidden' } );

    node5.attr( { visibility: 'hidden', transform: 's1,1' } );
    node5Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node5Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node5Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node5Polygone4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node5Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node5Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node5Circle3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node5Text1.attr( { visibility: 'hidden' } );
    node5Text2.attr( { visibility: 'hidden' } );
    node5Text3.attr( { visibility: 'hidden' } );
    node5Text4.attr( { visibility: 'hidden' } );

    resetNode1();
    resetNode2();
    resetNode3();
    resetNode4();
    resetNode5();
  };

  var resetNode1 = function() {
    node11.attr( { visibility: 'hidden' } );
    node11Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node11Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node11Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node11Polygone4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node11Polygone5.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node11Polygone6.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node11Polygone6Mobile.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node11Polygone7.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node11Polygone8.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node11Text1.attr( { visibility: 'hidden' } );
    node11Text2.attr( { visibility: 'hidden' } );
    node11Text3.attr( { visibility: 'hidden' } );
    node11Text4.attr( { visibility: 'hidden' } );
    node11Text5.attr( { visibility: 'hidden' } );
    node11Text6.attr( { visibility: 'hidden' } );
    node11Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node11Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node11Circle3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node11Circle4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node11Circle5.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );

    node12.attr( { visibility: 'hidden' } );
    node12Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node12Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node12Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node12Polygone4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node12Text1.attr( { visibility: 'hidden' } );
    node12Text2.attr( { visibility: 'hidden' } );
    node12Text3.attr( { visibility: 'hidden' } );
    node12Text4.attr( { visibility: 'hidden' } );
    node12Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node12Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node12Circle3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );

    node13.attr( { visibility: 'hidden' } );
    node13Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node13Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node13Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node13Polygone4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node13Polygone5.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node13Polygone6.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node13Polygone7.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node13Polygone8.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node13Polygone9.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node13Text1.attr( { visibility: 'hidden' } );
    node13Text2.attr( { visibility: 'hidden' } );
    node13Text3.attr( { visibility: 'hidden' } );
    node13Text4.attr( { visibility: 'hidden' } );
    node13Text5.attr( { visibility: 'hidden' } );
    node13Text6.attr( { visibility: 'hidden' } );
    node13Text7.attr( { visibility: 'hidden' } );
    node13Text8.attr( { visibility: 'hidden' } );
    node13Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node13Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node13Circle3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node13Circle4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node13Circle5.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node13Circle6.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node13Circle7.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
  }

  var initNode1 = function() {
    node1Polygone1.attr( { visibility: 'visible', transform: 's1,1'  } );
    node1Polygone2.attr( { visibility: 'visible', transform: 's1,1'  } );
    node1Polygone2Mobile.attr( { visibility: 'visible', transform: 's1,1'  } );
    node1Polygone3.attr( { visibility: 'visible', transform: 's1,1'  } );
    node1Polygone4.attr( { visibility: 'visible', transform: 's1,1'  } );
    node1Circle1.attr( { visibility: 'visible', transform: 's1,1'  } );
    node1Circle2.attr( { visibility: 'visible', transform: 's1,1'  } );
    node1Circle3.attr( { visibility: 'visible', transform: 's1,1'  } );
    node1Text1.attr( { visibility: 'visible' } );
    node1Text2.attr( { visibility: 'visible' } );
    node1Text3.attr( { visibility: 'visible' } );
  }

  var resetNode2 = function() {
    node21.attr( { visibility: 'hidden' } );
    node21Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node21Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node21Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node21Polygone4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node21Polygone5.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node21Polygone6.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node21Polygone7.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node21Polygone8.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node21Polygone9.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node21Text1.attr( { visibility: 'hidden' } );
    node21Text2.attr( { visibility: 'hidden' } );
    node21Text3.attr( { visibility: 'hidden' } );
    node21Text4.attr( { visibility: 'hidden' } );
    node21Text5.attr( { visibility: 'hidden' } );
    node21Text6.attr( { visibility: 'hidden' } );
    node21Text7.attr( { visibility: 'hidden' } );
    node21Text8.attr( { visibility: 'hidden' } );
    node21Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node21Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node21Circle3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node21Circle4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node21Circle5.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node21Circle6.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node21Circle7.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node22.attr( { visibility: 'hidden' } );
    node22Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node22Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node22Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node22Polygone4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node22Polygone5.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node22Polygone6.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node22Polygone7.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node22Text1.attr( { visibility: 'hidden' } );
    node22Text2.attr( { visibility: 'hidden' } );
    node22Text3.attr( { visibility: 'hidden' } );
    node22Text4.attr( { visibility: 'hidden' } );
    node22Text5.attr( { visibility: 'hidden' } );
    node22Text6.attr( { visibility: 'hidden' } );
    node22Text7.attr( { visibility: 'hidden' } );
    node22Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node22Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node22Circle3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node22Circle4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node22Circle5.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node22Circle6.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
  }

  var initNode2 = function() {
   node2Polygone1.attr( { visibility: 'visible', transform: 's1,1'  } );
   node2Polygone2.attr( { visibility: 'visible', transform: 's1,1'  } );
   node2Polygone3.attr( { visibility: 'visible', transform: 's1,1'  } );
   node2Circle1.attr( { visibility: 'visible', transform: 's1,1'  } );
   node2Circle2.attr( { visibility: 'visible', transform: 's1,1'  } );
   node2Text1.attr( { visibility: 'visible' } );
   node2Text2.attr( { visibility: 'visible' } );
  }

  var resetNode3 = function() {
    node31.attr( { visibility: 'hidden' } );
    node31Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node31Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node31Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node31Polygone4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node31Text1.attr( { visibility: 'hidden' } );
    node31Text2.attr( { visibility: 'hidden' } );
    node31Text3.attr( { visibility: 'hidden' } );
    node31Text4.attr( { visibility: 'hidden' } );
    node31Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node31Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node31Circle3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node32.attr( { visibility: 'hidden' } );
    node32Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node32Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node32Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node32Polygone4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node32Text1.attr( { visibility: 'hidden' } );
    node32Text2.attr( { visibility: 'hidden' } );
    node32Text3.attr( { visibility: 'hidden' } );
    node32Text4.attr( { visibility: 'hidden' } );
    node32Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node32Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node32Circle3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node33.attr( { visibility: 'hidden' } );
    node33Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node33Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node33Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node33Polygone4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node33Text1.attr( { visibility: 'hidden' } );
    node33Text2.attr( { visibility: 'hidden' } );
    node33Text3.attr( { visibility: 'hidden' } );
    node33Text4.attr( { visibility: 'hidden' } );
    node33Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node33Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node33Circle3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
  }

  var initNode3 = function() {
    node3Polygone1.attr( { visibility: 'visible', transform: 's1,1'  } );
    node3Polygone2.attr( { visibility: 'visible', transform: 's1,1'  } );
    node3Polygone3.attr( { visibility: 'visible', transform: 's1,1'  } );
    node3Polygone4.attr( { visibility: 'visible', transform: 's1,1'  } );
    node3Circle1.attr( { visibility: 'visible', transform: 's1,1'  } );
    node3Circle2.attr( { visibility: 'visible', transform: 's1,1'  } );
    node3Circle3.attr( { visibility: 'visible', transform: 's1,1'  } );
    node3Text1.attr( { visibility: 'visible' } );
    node3Text2.attr( { visibility: 'visible' } );
    node3Text3.attr( { visibility: 'visible' } );
  }

  var resetNode4 = function() {
    node41.attr( { visibility: 'hidden' } );
    node41Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node41Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node41Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node41Polygone4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node41Text1.attr( { visibility: 'hidden' } );
    node41Text2.attr( { visibility: 'hidden' } );
    node41Text3.attr( { visibility: 'hidden' } );
    node41Text4.attr( { visibility: 'hidden' } );
    node41Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node41Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node41Circle3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node44.attr( { visibility: 'hidden' } );
    node44Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node44Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node44Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node44Polygone4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node44Text1.attr( { visibility: 'hidden' } );
    node44Text2.attr( { visibility: 'hidden' } );
    node44Text3.attr( { visibility: 'hidden' } );
    node44Text4.attr( { visibility: 'hidden' } );
    node44Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node44Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node44Circle3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
  }

  var initNode4 = function() {
    node4Polygone1.attr( { visibility: 'visible', transform: 's1,1'  } );
    node4Polygone2.attr( { visibility: 'visible', transform: 's1,1'  } );
    node4Polygone3.attr( { visibility: 'visible', transform: 's1,1'  } );
    node4Polygone4.attr( { visibility: 'visible', transform: 's1,1'  } );
    node4Circle1.attr( { visibility: 'visible', transform: 's1,1'  } );
    node4Circle2.attr( { visibility: 'visible', transform: 's1,1'  } );
    node4Circle3.attr( { visibility: 'visible', transform: 's1,1'  } );
    node4Text1.attr( { visibility: 'visible' } );
    node4Text2.attr( { visibility: 'visible' } );
    node4Text3.attr( { visibility: 'visible' } );
  }

  var resetNode5 = function() {
    node51.attr( { visibility: 'hidden' } );
    node51Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node51Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node51Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node51Polygone4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node51Polygone5.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node51Text1.attr( { visibility: 'hidden' } );
    node51Text2.attr( { visibility: 'hidden' } );
    node51Text3.attr( { visibility: 'hidden' } );
    node51Text4.attr( { visibility: 'hidden' } );
    node51Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node51Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node51Circle3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node52.attr( { visibility: 'hidden' } );
    node52Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node52Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node52Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node52Polygone4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node52Polygone5.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node52Text1.attr( { visibility: 'hidden' } );
    node52Text2.attr( { visibility: 'hidden' } );
    node52Text3.attr( { visibility: 'hidden' } );
    node52Text4.attr( { visibility: 'hidden' } );
    node52Text5.attr( { visibility: 'hidden' } );
    node52Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node52Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node52Circle3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node52Circle4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node53.attr( { visibility: 'hidden' } );
    node53Polygone1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node53Polygone2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node53Polygone3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node53Polygone4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node53Polygone5.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node53Text1.attr( { visibility: 'hidden' } );
    node53Text2.attr( { visibility: 'hidden' } );
    node53Text3.attr( { visibility: 'hidden' } );
    node53Text4.attr( { visibility: 'hidden' } );
    node53Text5.attr( { visibility: 'hidden' } );
    node53Circle1.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node53Circle2.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node53Circle3.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
    node53Circle4.attr( { visibility: 'hidden', transform: 's0.0,0.0' } );
  }

  var initNode5 = function() {
    node5Polygone1.attr( { visibility: 'visible', transform: 's1,1'  } );
    node5Polygone2.attr( { visibility: 'visible', transform: 's1,1'  } );
    node5Polygone3.attr( { visibility: 'visible', transform: 's1,1'  } );
    node5Polygone4.attr( { visibility: 'visible', transform: 's1,1'  } );
    node5Circle1.attr( { visibility: 'visible', transform: 's1,1'  } );
    node5Circle2.attr( { visibility: 'visible', transform: 's1,1'  } );
    node5Circle3.attr( { visibility: 'visible', transform: 's1,1'  } );
    node5Text1.attr( { visibility: 'visible' } );
    node5Text2.attr( { visibility: 'visible' } );
    node5Text3.attr( { visibility: 'visible' } );
  }

  var backToRoot = function(asTarget) {
    if(currentState !== 'node-root' && level !== 1) {
      currentState = 'node-root';

      if(asTarget) {
        changeLevel(1);
        navigate(dataTree.root, true);
      }

      nodeRoot.animate({ transform: 's1,1' }, 200, mina.linear);
      nodeRoot.attr( { cursor: 'auto' } );

      nodeRootText1.attr( { visibility: 'visible' } );
      nodeRootPolygone1.attr( { visibility: 'visible' } );
      nodeRootCircle1.attr( { visibility: 'visible' } );

      nodeRootText2.attr( { visibility: 'visible' } );
      nodeRootPolygone2.attr( { visibility: 'visible' } );
      nodeRootCircle2.attr( { visibility: 'visible' } );

      nodeRootText3.attr( { visibility: 'visible' } );
      nodeRootPolygone3.attr( { visibility: 'visible' } );
      nodeRootCircle3.attr( { visibility: 'visible' } );

      nodeRootText4.attr( { visibility: 'visible' } );
      nodeRootPolygone4.attr( { visibility: 'visible' } );
      nodeRootCircle4.attr( { visibility: 'visible' } );

      nodeRootText5.attr( { visibility: 'visible' } );
      nodeRootPolygone5.attr( { visibility: 'visible' } );
      nodeRootCircle5.attr( { visibility: 'visible' } );

      resetRootNode();
    }
  }

  var nodeRootTo1 = function(navigationType) {
    var breakNavigation = false;
    if(level == 2 && navigationType == NavigationType.GRAPHIC) {
      breakNavigation = true;
    }
    if(currentState !== 'node-1' && !breakNavigation) {
      currentState = 'node-1';
      navigate(dataTree.root.node1, true);
      changeLevel(2);

      $('.nav-node-1-child.level-2').show();
      $('.nav-node-1').addClass('active');

      setTimeout(function() {

        nodeRoot.animate({ transform: 's0.60,0.60,t664,590,r-6' }, 200, mina.linear);
        nodeRoot.attr({ cursor: 'pointer' });

        node1.attr({ visibility: 'visible' });
        node1Polygone2.attr( { visibility: 'visible' } );
        node1Polygone2.animate({ transform: 's1,1' }, 100, mina.linear);
        node1Polygone2Mobile.attr( { visibility: 'visible' } );
        node1Polygone2Mobile.animate({ transform: 's1,1' }, 100, mina.linear);

        resetNode1();

        nodeRootText1.attr( { visibility: 'hidden' } );
        nodeRootPolygone1.attr( { visibility: 'hidden' } );
        nodeRootCircle1.attr( { visibility: 'hidden' } );

        node1.animate({ transform: 's1,1' }, 200, mina.linear);
      }, 50);

      setTimeout(function() {
        node1Polygone1.attr( { visibility: 'visible' } );
        node1Polygone1.animate({ transform: 's1,1' }, 200, mina.linear);
        node1Polygone3.attr( { visibility: 'visible' } );
        node1Polygone3.animate({ transform: 's1,1' }, 200, mina.linear);
        node1Polygone4.attr( { visibility: 'visible' } );
        node1Polygone4.animate({ transform: 's1,1' }, 200, mina.linear);
        node1Circle1.attr( { visibility: 'visible' } );
        node1Circle1.animate({ transform: 's1,1' }, 300, mina.linear);
        node1Circle2.attr( { visibility: 'visible' } );
        node1Circle2.animate({ transform: 's1,1' }, 300, mina.linear);
        node1Circle3.attr( { visibility: 'visible' } );
        node1Circle3.animate({ transform: 's1,1' }, 300, mina.linear);
        node1Text1.attr( { visibility: 'visible' } );
        node1Text2.attr( { visibility: 'visible' } );
        node1Text3.attr( { visibility: 'visible' } );
      }, 200);
    }
  };

  var node1To11 = function(navigationType) {
    var breakNavigation = false;
    if(level == 3 && navigationType == NavigationType.GRAPHIC) {
      breakNavigation = true;
    }

    if(currentState !== 'node-1-1' && !breakNavigation) {
      currentState = 'node-1-1';
      navigate(dataTree.root.node1.node1, true);
      changeLevel(3);

      $('.nav-node-1-child.level-2').show();
      $('.nav-node-1-1').first().addClass('active');

      setTimeout(function() {
        node1.attr( { cursor: 'pointer' } );
        node1.animate({ transform: 's0.60,0.60,t579,-282,r-3' }, 200, mina.linear);
        nodeRoot.animate({ transform: 's0.36,0.36,t1709,144,r-9' }, 200, mina.linear);
        node11.attr( { visibility: 'visible' } );

        initNode1();
        resetNode1();

        node1Polygone4.attr( { visibility: 'hidden' } );
        node1Circle1.attr( { visibility: 'hidden' } );
        node1Text1.attr( { visibility: 'hidden' } );

        node11Polygone6.attr( { visibility: 'hidden', transform: 's0,0' } );
        node11Polygone6.attr( { visibility: 'visible' } );
        node11Polygone6.animate({ transform: 's1,1' }, 100, mina.linear);
        node11Polygone6Mobile.attr( { visibility: 'hidden', transform: 's0,0' } );
        node11Polygone6Mobile.attr( { visibility: 'visible' } );
        node11Polygone6Mobile.animate({ transform: 's1,1' }, 100, mina.linear);
      }, 50);

      setTimeout(function() {
        node11Polygone1.attr( { visibility: 'visible' } );
        node11Polygone1.animate({ transform: 's1,1' }, 300, mina.linear);
        node11Polygone2.attr( { visibility: 'visible' } );
        node11Polygone2.animate({ transform: 's1,1' }, 300, mina.linear);
        node11Polygone3.attr( { visibility: 'visible' } );
        node11Polygone3.animate({ transform: 's1,1' }, 300, mina.linear);
        node11Polygone4.attr( { visibility: 'visible' } );
        node11Polygone4.animate({ transform: 's1,1' }, 300, mina.linear);
        node11Polygone5.attr( { visibility: 'visible' } );
        node11Polygone5.animate({ transform: 's1,1' }, 300, mina.linear);
        node11Polygone7.attr( { visibility: 'visible' } );
        node11Polygone7.animate({ transform: 's1,1' }, 300, mina.linear);
        node11Polygone8.attr( { visibility: 'visible' } );
        node11Polygone8.animate({ transform: 's1,1' }, 300, mina.linear);
        node11Circle1.attr( { visibility: 'visible' } );
        node11Circle1.animate({ transform: 's1,1' }, 300, mina.linear);
        node11Circle2.attr( { visibility: 'visible' } );
        node11Circle2.animate({ transform: 's1,1' }, 300, mina.linear);
        node11Circle3.attr( { visibility: 'visible' } );
        node11Circle3.animate({ transform: 's1,1' }, 300, mina.linear);
        node11Circle4.attr( { visibility: 'visible' } );
        node11Circle4.animate({ transform: 's1,1' }, 300, mina.linear);
        node11Circle5.attr( { visibility: 'visible' } );
        node11Circle5.animate({ transform: 's1,1' }, 300, mina.linear);
        node11Text1.attr( { visibility: 'visible' } );
        node11Text2.attr( { visibility: 'visible' } );
        node11Text3.attr( { visibility: 'visible' } );
        node11Text4.attr( { visibility: 'visible' } );
        node11Text5.attr( { visibility: 'visible' } );
        node11Text6.attr( { visibility: 'visible' } );
      }, 200);
    }
  };

  var node1To12 = function(navigationType) {
    var breakNavigation = false;
    if(level == 3 && navigationType == NavigationType.GRAPHIC) {
      breakNavigation = true;
    }

    if(currentState !== 'node-1-2' && !breakNavigation) {
      currentState = 'node-1-2';
      navigate(dataTree.root.node1.node2, true);
      changeLevel(3);

      $('.nav-node-1-child.level-2').show();
      $('.nav-node-1-2').first().addClass('active');

      setTimeout(function() {
        node1.attr( { cursor: 'pointer' } );
        node1.animate({ transform: 's0.60,0.60,t-880,312,r-5' }, 200, mina.linear);
        nodeRoot.animate({ transform: 's0.36,0.36,t-703,1109,r-12' }, 200, mina.linear);
        node12.attr( { visibility: 'visible' } );

        initNode1();
        resetNode1();

        node1Polygone3.attr( { visibility: 'hidden' } );
        node1Circle3.attr( { visibility: 'hidden' } );
        node1Text3.attr( { visibility: 'hidden' } );

        node12Polygone1.attr( { visibility: 'hidden', transform: 's0,0' } );
        node12Polygone1.attr( { visibility: 'visible' } );
        node12Polygone1.animate({ transform: 's1,1' }, 100, mina.linear);
      }, 50);

      setTimeout(function() {
        node12Polygone2.attr( { visibility: 'visible' } );
        node12Polygone2.animate({ transform: 's1,1' }, 300, mina.linear);
        node12Polygone3.attr( { visibility: 'visible' } );
        node12Polygone3.animate({ transform: 's1,1' }, 300, mina.linear);
        node12Polygone4.attr( { visibility: 'visible' } );
        node12Polygone4.animate({ transform: 's1,1' }, 300, mina.linear);
        node12Circle1.attr( { visibility: 'visible' } );
        node12Circle1.animate({ transform: 's1,1' }, 300, mina.linear);
        node12Circle2.attr( { visibility: 'visible' } );
        node12Circle2.animate({ transform: 's1,1' }, 300, mina.linear);
        node12Circle3.attr( { visibility: 'visible' } );
        node12Circle3.animate({ transform: 's1,1' }, 300, mina.linear);
        node12Text1.attr( { visibility: 'visible' } );
        node12Text2.attr( { visibility: 'visible' } );
        node12Text3.attr( { visibility: 'visible' } );
        node12Text4.attr( { visibility: 'visible' } );
      }, 200);
    }
  };

  var node1To13 = function(navigationType) {
    var breakNavigation = false;
    if(level == 3 && navigationType == NavigationType.GRAPHIC) {
      breakNavigation = true;
    }

    if(currentState !== 'node-1-3' && !breakNavigation) {
      currentState = 'node-1-3';
      navigate(dataTree.root.node1.node3, true);
      changeLevel(3);

      $('.nav-node-1-child.level-2').show();
      $('.nav-node-1-3').first().addClass('active');

      setTimeout(function() {
        node1.attr( { cursor: 'pointer' } );
        node1.animate({ transform: 's0.60,0.60,t546,407' }, 200, mina.linear);
        nodeRoot.animate({ transform: 's0.36,0.36,t1629,1323,r-6' }, 200, mina.linear);
        node13.attr( { visibility: 'visible' } );

        initNode1();
        resetNode1();

        node1Polygone1.attr( { visibility: 'hidden' } );
        node1Circle2.attr( { visibility: 'hidden' } );
        node1Text2.attr( { visibility: 'hidden' } );

        node13Polygone3.attr( { visibility: 'hidden', transform: 's0,0' } );
        node13Polygone3.attr( { visibility: 'visible' } );
        node13Polygone3.animate({ transform: 's1,1' }, 100, mina.linear);
      }, 50);

      setTimeout(function() {
        node13Polygone1.attr( { visibility: 'visible' } );
        node13Polygone1.animate({ transform: 's1,1' }, 300, mina.linear);
        node13Polygone2.attr( { visibility: 'visible' } );
        node13Polygone2.animate({ transform: 's1,1' }, 300, mina.linear);
        node13Polygone3.attr( { visibility: 'visible' } );
        node13Polygone3.animate({ transform: 's1,1' }, 300, mina.linear);
        node13Polygone4.attr( { visibility: 'visible' } );
        node13Polygone4.animate({ transform: 's1,1' }, 300, mina.linear);
        node13Polygone5.attr( { visibility: 'visible' } );
        node13Polygone5.animate({ transform: 's1,1' }, 300, mina.linear);
        node13Polygone6.attr( { visibility: 'visible' } );
        node13Polygone6.animate({ transform: 's1,1' }, 300, mina.linear);
        node13Polygone7.attr( { visibility: 'visible' } );
        node13Polygone7.animate({ transform: 's1,1' }, 300, mina.linear);
        node13Polygone8.attr( { visibility: 'visible' } );
        node13Polygone8.animate({ transform: 's1,1' }, 300, mina.linear);
        node13Circle1.attr( { visibility: 'visible' } );
        node13Circle1.animate({ transform: 's1,1' }, 300, mina.linear);
        node13Circle2.attr( { visibility: 'visible' } );
        node13Circle2.animate({ transform: 's1,1' }, 300, mina.linear);
        node13Circle3.attr( { visibility: 'visible' } );
        node13Circle3.animate({ transform: 's1,1' }, 300, mina.linear);
        node13Circle4.attr( { visibility: 'visible' } );
        node13Circle4.animate({ transform: 's1,1' }, 300, mina.linear);
        node13Circle5.attr( { visibility: 'visible' } );
        node13Circle5.animate({ transform: 's1,1' }, 300, mina.linear);
        node13Circle6.attr( { visibility: 'visible' } );
        node13Circle6.animate({ transform: 's1,1' }, 300, mina.linear);
        node13Circle7.attr( { visibility: 'visible' } );
        node13Circle7.animate({ transform: 's1,1' }, 300, mina.linear);
        node13Text1.attr( { visibility: 'visible' } );
        node13Text2.attr( { visibility: 'visible' } );
        node13Text3.attr( { visibility: 'visible' } );
        node13Text4.attr( { visibility: 'visible' } );
        node13Text5.attr( { visibility: 'visible' } );
        node13Text6.attr( { visibility: 'visible' } );
        node13Text7.attr( { visibility: 'visible' } );
        node13Text8.attr( { visibility: 'visible' } );
      }, 200);
    }
  };

  var node11To111 = function() {
    if(currentState !== 'node-1-1-1') {
      currentState = 'node-1-1-1';
      navigate(dataTree.root.node1.node1.node1, false);
    }
  };

  var node11To112 = function() {
    if(currentState !== 'node-1-1-2') {
      currentState = 'node-1-1-2';
      navigate(dataTree.root.node1.node1.node2, false);
    }
  };

  var node11To113 = function() {
    if(currentState !== 'node-1-1-3') {
      currentState = 'node-1-1-3';
      navigate(dataTree.root.node1.node1.node3, false);
    }
  };

  var node11To114 = function() {
    if(currentState !== 'node-1-1-4') {
      currentState = 'node-1-1-4';
      navigate(dataTree.root.node1.node1.node4, false);
    }
  };

  var node11To115 = function() {
    if(currentState !== 'node-1-1-5') {
      currentState = 'node-1-1-5';
      navigate(dataTree.root.node1.node1.node5, false);
    }
  };

  var node12To121 = function() {
    if(currentState !== 'node-1-2-1') {
      currentState = 'node-1-2-1';
      navigate(dataTree.root.node1.node2.node1, false);
    }
  };

  var node12To122 = function() {
    if(currentState !== 'node-1-2-2') {
      currentState = 'node-1-2-2';
      navigate(dataTree.root.node1.node2.node2, false);
    }
  };

  var node12To123 = function() {
    if(currentState !== 'node-1-2-3') {
      currentState = 'node-1-2-3';
      navigate(dataTree.root.node1.node2.node3, false);
    }
  };

  var node13To131 = function() {
    if(currentState !== 'node-1-3-1') {
      currentState = 'node-1-3-1';
      navigate(dataTree.root.node1.node3.node1, false);
    }
  };

  var node13To132 = function() {
    if(currentState !== 'node-1-3-2') {
      currentState = 'node-1-3-2';
      navigate(dataTree.root.node1.node3.node2, false);
    }
  };

  var node13To133 = function() {
    if(currentState !== 'node-1-3-3') {
      currentState = 'node-1-3-3';
      navigate(dataTree.root.node1.node3.node3, false);
    }
  };

  var node13To134 = function() {
    if(currentState !== 'node-1-3-4') {
      currentState = 'node-1-3-4';
      navigate(dataTree.root.node1.node3.node4, false);
    }
  };

  var node13To135 = function() {
    if(currentState !== 'node-1-3-5') {
      currentState = 'node-1-3-5';
      navigate(dataTree.root.node1.node3.node5, false);
    }
  };

  var node13To136 = function() {
    if(currentState !== 'node-1-3-6') {
      currentState = 'node-1-3-6';
      navigate(dataTree.root.node1.node3.node6, false);
    }
  };

  var node13To137 = function() {
    if(currentState !== 'node-1-3-7') {
      currentState = 'node-1-3-7';
      navigate(dataTree.root.node1.node3.node7, false);
    }
  };

  var nodeRootTo2 = function(navigationType) {
    var breakNavigation = false;
    if(level == 2 && navigationType == NavigationType.GRAPHIC) {
      breakNavigation = true;
    }
    if(currentState !== 'node-2' && !breakNavigation) {
      currentState = 'node-2';
      changeLevel(2);
      navigate(dataTree.root.node2, true);

      $('.nav-node-2-child.level-2').show();
      $('.nav-node-2').addClass('active');

      setTimeout(function() {

        nodeRoot.animate({ transform: 's0.60,0.60,t755,-432s' }, 200, mina.linear);
        nodeRoot.attr({ cursor: 'pointer' });

        node2.attr({ visibility: 'visible' });
        node2Polygone3.attr( { visibility: 'visible' } );
        node2Polygone3.animate({ transform: 's1,1' }, 100, mina.linear);

        resetNode2();

        nodeRootText2.attr( { visibility: 'hidden' } );
        nodeRootPolygone2.attr( { visibility: 'hidden' } );
        nodeRootCircle2.attr( { visibility: 'hidden' } );

        node2.animate({ transform: 's1,1' }, 200, mina.linear);
      }, 50);

      setTimeout(function() {
        node2Polygone1.attr( { visibility: 'visible' } );
        node2Polygone1.animate({ transform: 's1,1' }, 200, mina.linear);
        node2Polygone2.attr( { visibility: 'visible' } );
        node2Polygone2.animate({ transform: 's1,1' }, 200, mina.linear);
        node2Circle1.attr( { visibility: 'visible' } );
        node2Circle1.animate({ transform: 's1,1' }, 300, mina.linear);
        node2Circle2.attr( { visibility: 'visible' } );
        node2Circle2.animate({ transform: 's1,1' }, 300, mina.linear);
        node2Text1.attr( { visibility: 'visible' } );
        node2Text2.attr( { visibility: 'visible' } );
        node2Text3.attr( { visibility: 'visible' } );
      }, 200);
    }
  };

  var node2To21 = function(navigationType) {
    var breakNavigation = false;
    if(level == 3 && navigationType == NavigationType.GRAPHIC) {
      breakNavigation = true;
    }

    if(currentState !== 'node-2-1' && !breakNavigation) {
      currentState = 'node-2-1';
      navigate(dataTree.root.node2.node1, true);
      changeLevel(3);

      $('.nav-node-2-child.level-2').show();
      $('.nav-node-2-1').first().addClass('active');

      setTimeout(function() {
        node2.attr( { cursor: 'pointer' } );
        node2.animate({ transform: 's0.60,0.60,t631,-350,r7' }, 200, mina.linear);
        nodeRoot.animate({ transform: 's0.36,0.36,t2000,-894,r8' }, 200, mina.linear);
        node21.attr( { visibility: 'visible' } );

        initNode2();
        resetNode2();

        node2Polygone2.attr( { visibility: 'hidden' } );
        node2Circle2.attr( { visibility: 'hidden' } );
        node2Text3.attr( { visibility: 'hidden' } );

        node21Polygone3.attr( { visibility: 'hidden', transform: 's0,0' } );
        node21Polygone3.attr( { visibility: 'visible' } );
        node21Polygone3.animate({ transform: 's1,1' }, 100, mina.linear);
      }, 50);

      setTimeout(function() {
        node21Polygone1.attr( { visibility: 'visible' } );
        node21Polygone1.animate({ transform: 's1,1' }, 300, mina.linear);
        node21Polygone2.attr( { visibility: 'visible' } );
        node21Polygone2.animate({ transform: 's1,1' }, 300, mina.linear);
        node21Polygone4.attr( { visibility: 'visible' } );
        node21Polygone4.animate({ transform: 's1,1' }, 300, mina.linear);
        node21Polygone5.attr( { visibility: 'visible' } );
        node21Polygone5.animate({ transform: 's1,1' }, 300, mina.linear);
        node21Polygone6.attr( { visibility: 'visible' } );
        node21Polygone6.animate({ transform: 's1,1' }, 300, mina.linear);
        node21Polygone7.attr( { visibility: 'visible' } );
        node21Polygone7.animate({ transform: 's1,1' }, 300, mina.linear);
        node21Polygone8.attr( { visibility: 'visible' } );
        node21Polygone8.animate({ transform: 's1,1' }, 300, mina.linear);
        node21Polygone9.attr( { visibility: 'visible' } );
        node21Polygone9.animate({ transform: 's1,1' }, 300, mina.linear);
        node21Circle1.attr( { visibility: 'visible' } );
        node21Circle1.animate({ transform: 's1,1' }, 300, mina.linear);
        node21Circle2.attr( { visibility: 'visible' } );
        node21Circle2.animate({ transform: 's1,1' }, 300, mina.linear);
        node21Circle3.attr( { visibility: 'visible' } );
        node21Circle3.animate({ transform: 's1,1' }, 300, mina.linear);
        node21Circle4.attr( { visibility: 'visible' } );
        node21Circle4.animate({ transform: 's1,1' }, 300, mina.linear);
        node21Circle5.attr( { visibility: 'visible' } );
        node21Circle5.animate({ transform: 's1,1' }, 300, mina.linear);
        node21Circle6.attr( { visibility: 'visible' } );
        node21Circle6.animate({ transform: 's1,1' }, 300, mina.linear);
        node21Circle7.attr( { visibility: 'visible' } );
        node21Circle7.animate({ transform: 's1,1' }, 300, mina.linear);
        node21Text1.attr( { visibility: 'visible' } );
        node21Text2.attr( { visibility: 'visible' } );
        node21Text3.attr( { visibility: 'visible' } );
        node21Text4.attr( { visibility: 'visible' } );
        node21Text5.attr( { visibility: 'visible' } );
        node21Text6.attr( { visibility: 'visible' } );
        node21Text7.attr( { visibility: 'visible' } );
        node21Text8.attr( { visibility: 'visible' } );
      }, 200);
    }
  };

  var node2To22 = function(navigationType) {
    var breakNavigation = false;
    if(level == 3 && navigationType == NavigationType.GRAPHIC) {
      breakNavigation = true;
    }

    if(currentState !== 'node-2-2' && !breakNavigation) {
      currentState = 'node-2-2';
      navigate(dataTree.root.node2.node2, true);
      changeLevel(3);

      $('.nav-node-2-child.level-2').show();
      $('.nav-node-2-2').first().addClass('active');

      setTimeout(function() {
        node2.attr( { cursor: 'pointer' } );
        node2.animate({ transform: 's0.60,0.60,t-781,-350,r-5' }, 200, mina.linear);
        nodeRoot.animate({ transform: 's0.36,0.36,t-457,-1012,r-6' }, 200, mina.linear);
        node22.attr( { visibility: 'visible' } );

        initNode2();
        resetNode2();

        node2Polygone1.attr( { visibility: 'hidden' } );
        node2Circle1.attr( { visibility: 'hidden' } );
        node2Text2.attr( { visibility: 'hidden' } );

        node22Polygone7.attr( { visibility: 'hidden', transform: 's0,0' } );
        node22Polygone7.attr( { visibility: 'visible' } );
        node22Polygone7.animate({ transform: 's1,1' }, 100, mina.linear);
      }, 50);

      setTimeout(function() {
        node22Polygone1.attr( { visibility: 'visible' } );
        node22Polygone1.animate({ transform: 's1,1' }, 300, mina.linear);
        node22Polygone2.attr( { visibility: 'visible' } );
        node22Polygone2.animate({ transform: 's1,1' }, 300, mina.linear);
        node22Polygone3.attr( { visibility: 'visible' } );
        node22Polygone3.animate({ transform: 's1,1' }, 300, mina.linear);
        node22Polygone4.attr( { visibility: 'visible' } );
        node22Polygone4.animate({ transform: 's1,1' }, 300, mina.linear);
        node22Polygone5.attr( { visibility: 'visible' } );
        node22Polygone5.animate({ transform: 's1,1' }, 300, mina.linear);
        node22Polygone6.attr( { visibility: 'visible' } );
        node22Polygone6.animate({ transform: 's1,1' }, 300, mina.linear);
        node22Circle1.attr( { visibility: 'visible' } );
        node22Circle1.animate({ transform: 's1,1' }, 300, mina.linear);
        node22Circle2.attr( { visibility: 'visible' } );
        node22Circle2.animate({ transform: 's1,1' }, 300, mina.linear);
        node22Circle3.attr( { visibility: 'visible' } );
        node22Circle3.animate({ transform: 's1,1' }, 300, mina.linear);
        node22Circle4.attr( { visibility: 'visible' } );
        node22Circle4.animate({ transform: 's1,1' }, 300, mina.linear);
        node22Circle5.attr( { visibility: 'visible' } );
        node22Circle5.animate({ transform: 's1,1' }, 300, mina.linear);
        node22Circle6.attr( { visibility: 'visible' } );
        node22Circle6.animate({ transform: 's1,1' }, 300, mina.linear);
        node22Text1.attr( { visibility: 'visible' } );
        node22Text2.attr( { visibility: 'visible' } );
        node22Text3.attr( { visibility: 'visible' } );
        node22Text4.attr( { visibility: 'visible' } );
        node22Text5.attr( { visibility: 'visible' } );
        node22Text6.attr( { visibility: 'visible' } );
        node22Text7.attr( { visibility: 'visible' } );
      }, 200);
    }
  };

  var node21To211 = function() {
    if(currentState !== 'node-2-1-1') {
      currentState = 'node-2-1-1';
      navigate(dataTree.root.node2.node1.node1, false);
    }
  };

  var node21To212 = function() {
    if(currentState !== 'node-2-1-2') {
      currentState = 'node-2-1-2';
      navigate(dataTree.root.node2.node1.node2, false);
    }
  };

  var node21To213 = function() {
    if(currentState !== 'node-2-1-3') {
      currentState = 'node-2-1-3';
      navigate(dataTree.root.node2.node1.node3, false);
    }
  };

  var node21To214 = function() {
    if(currentState !== 'node-2-1-4') {
      currentState = 'node-2-1-4';
      navigate(dataTree.root.node2.node1.node4, false);
    }
  };

  var node22To221 = function() {
    if(currentState !== 'node-2-2-1') {
      currentState = 'node-2-2-1';
      navigate(dataTree.root.node2.node2.node1, false);
    }
  };

  var node22To222 = function() {
    if(currentState !== 'node-2-2-2') {
      currentState = 'node-2-2-2';
      navigate(dataTree.root.node2.node2.node2, false);
    }
  };

  var node22To223 = function() {
    if(currentState !== 'node-2-2-3') {
      currentState = 'node-2-2-3';
      navigate(dataTree.root.node2.node2.node3, false);
    }
  };

  var node22To224 = function() {
    if(currentState !== 'node-2-2-4') {
      currentState = 'node-2-2-4';
      navigate(dataTree.root.node2.node2.node4, false);
    }
  };

  var node22To225 = function() {
    if(currentState !== 'node-2-2-5') {
      currentState = 'node-2-2-5';
      navigate(dataTree.root.node2.node2.node5, false);
    }
  };

  var node22To226 = function() {
    if(currentState !== 'node-2-2-6') {
      currentState = 'node-2-2-6';
      navigate(dataTree.root.node2.node2.node6, false);
    }
  };

  var node23To231 = function() {
    if(currentState !== 'node-2-3-1') {
      currentState = 'node-2-3-1';
      navigate(dataTree.root.node2.node3.node1, false);
    }
  };

  var node23To232 = function() {
    if(currentState !== 'node-2-3-2') {
      currentState = 'node-2-3-2';
      navigate(dataTree.root.node2.node3.node2, false);
    }
  };

  var node23To233 = function() {
    if(currentState !== 'node-2-3-3') {
      currentState = 'node-2-3-3';
      navigate(dataTree.root.node2.node3.node3, false);
    }
  };

  var nodeRootTo3 = function(navigationType) {
    var breakNavigation = false;
    if(level == 2 && navigationType == NavigationType.GRAPHIC) {
      breakNavigation = true;
    }
    if(currentState !== 'node-3' && !breakNavigation) {
      currentState = 'node-3';
      navigate(dataTree.root.node3, true);
      changeLevel(2);

      $('.nav-node-3-child.level-2').show();
      $('.nav-node-3').addClass('active');

      setTimeout(function() {

        nodeRoot.animate({ transform: 's0.60,0.60,t-708,-404,r-16' }, 200, mina.linear);
        nodeRoot.attr({ cursor: 'pointer' });

        node3.attr({ visibility: 'visible' });
        node3Polygone4.attr( { visibility: 'visible' } );
        node3Polygone4.animate({ transform: 's1,1' }, 100, mina.linear);

        resetNode3();

        nodeRootText3.attr( { visibility: 'hidden' } );
        nodeRootPolygone3.attr( { visibility: 'hidden' } );
        nodeRootCircle3.attr( { visibility: 'hidden' } );

        node3.animate({ transform: 's1,1' }, 200, mina.linear);
      }, 50);

      setTimeout(function() {
        node3Polygone1.attr( { visibility: 'visible' } );
        node3Polygone1.animate({ transform: 's1,1' }, 200, mina.linear);
        node3Polygone2.attr( { visibility: 'visible' } );
        node3Polygone2.animate({ transform: 's1,1' }, 200, mina.linear);
        node3Polygone3.attr( { visibility: 'visible' } );
        node3Polygone3.animate({ transform: 's1,1' }, 200, mina.linear);
        node3Circle1.attr( { visibility: 'visible' } );
        node3Circle1.animate({ transform: 's1,1' }, 300, mina.linear);
        node3Circle2.attr( { visibility: 'visible' } );
        node3Circle2.animate({ transform: 's1,1' }, 300, mina.linear);
        node3Circle3.attr( { visibility: 'visible' } );
        node3Circle3.animate({ transform: 's1,1' }, 300, mina.linear);
        node3Text1.attr( { visibility: 'visible' } );
        node3Text2.attr( { visibility: 'visible' } );
        node3Text3.attr( { visibility: 'visible' } );
        node3Text4.attr( { visibility: 'visible' } );
      }, 200);
    }
  };

  var node3To31 = function(navigationType) {
    var breakNavigation = false;
    if(level == 3 && navigationType == NavigationType.GRAPHIC) {
      breakNavigation = true;
    }

    if(currentState !== 'node-3-1' && !breakNavigation) {
      currentState = 'node-3-1';
      navigate(dataTree.root.node3.node1, true);
      changeLevel(3);

      $('.nav-node-3-child.level-2').show();
      $('.nav-node-3-1').first().addClass('active');

      setTimeout(function() {
        node3.attr( { cursor: 'pointer' } );
        node3.animate({ transform: 's0.60,0.60,t-425,515' }, 200, mina.linear);
        nodeRoot.animate({ transform: 's0.36,0.36,t-1395,468,r-16' }, 200, mina.linear);
        node31.attr( { visibility: 'visible' } );

        initNode3();
        resetNode3();

        node3Polygone1.attr( { visibility: 'hidden' } );
        node3Circle1.attr( { visibility: 'hidden' } );
        node3Text2.attr( { visibility: 'hidden' } );

        node31Polygone1.attr( { visibility: 'hidden', transform: 's0,0' } );
        node31Polygone1.attr( { visibility: 'visible' } );
        node31Polygone1.animate({ transform: 's1,1' }, 100, mina.linear);
      }, 50);

      setTimeout(function() {
        node31Polygone2.attr( { visibility: 'visible' } );
        node31Polygone2.animate({ transform: 's1,1' }, 300, mina.linear);
        node31Polygone3.attr( { visibility: 'visible' } );
        node31Polygone3.animate({ transform: 's1,1' }, 300, mina.linear);
        node31Polygone4.attr( { visibility: 'visible' } );
        node31Polygone4.animate({ transform: 's1,1' }, 300, mina.linear);
        node31Circle1.attr( { visibility: 'visible' } );
        node31Circle1.animate({ transform: 's1,1' }, 300, mina.linear);
        node31Circle2.attr( { visibility: 'visible' } );
        node31Circle2.animate({ transform: 's1,1' }, 300, mina.linear);
        node31Circle3.attr( { visibility: 'visible' } );
        node31Circle3.animate({ transform: 's1,1' }, 300, mina.linear);
        node31Text1.attr( { visibility: 'visible' } );
        node31Text2.attr( { visibility: 'visible' } );
        node31Text3.attr( { visibility: 'visible' } );
        node31Text4.attr( { visibility: 'visible' } );
      }, 200);
    }
  };

  var node3To32 = function(navigationType) {
    var breakNavigation = false;
    if(level == 3 && navigationType == NavigationType.GRAPHIC) {
      breakNavigation = true;
    }

    if(currentState !== 'node-3-2' && !breakNavigation) {
      currentState = 'node-3-2';
      navigate(dataTree.root.node3.node2, true);
      changeLevel(3);

      $('.nav-node-3-child.level-2').show();
      $('.nav-node-3-2').first().addClass('active');

      setTimeout(function() {
        node3.attr( { cursor: 'pointer' } );
        node3.animate({ transform: 's0.60,0.60,t-732,-10' }, 200, mina.linear);
        nodeRoot.animate({ transform: 's0.36,0.36,t-1910,-405,r-16' }, 200, mina.linear);
        node32.attr( { visibility: 'visible' } );

        initNode3();
        resetNode3();

        node3Polygone2.attr( { visibility: 'hidden' } );
        node3Circle2.attr( { visibility: 'hidden' } );
        node3Text3.attr( { visibility: 'hidden' } );

        node32Polygone1.attr( { visibility: 'hidden', transform: 's0,0' } );
        node32Polygone1.attr( { visibility: 'visible' } );
        node32Polygone1.animate({ transform: 's1,1' }, 100, mina.linear);
      }, 50);

      setTimeout(function() {
        node32Polygone2.attr( { visibility: 'visible' } );
        node32Polygone2.animate({ transform: 's1,1' }, 300, mina.linear);
        node32Polygone3.attr( { visibility: 'visible' } );
        node32Polygone3.animate({ transform: 's1,1' }, 300, mina.linear);
        node32Polygone4.attr( { visibility: 'visible' } );
        node32Polygone4.animate({ transform: 's1,1' }, 300, mina.linear);
        node32Circle1.attr( { visibility: 'visible' } );
        node32Circle1.animate({ transform: 's1,1' }, 300, mina.linear);
        node32Circle2.attr( { visibility: 'visible' } );
        node32Circle2.animate({ transform: 's1,1' }, 300, mina.linear);
        node32Circle3.attr( { visibility: 'visible' } );
        node32Circle3.animate({ transform: 's1,1' }, 300, mina.linear);
        node32Text1.attr( { visibility: 'visible' } );
        node32Text2.attr( { visibility: 'visible' } );
        node32Text3.attr( { visibility: 'visible' } );
        node32Text4.attr( { visibility: 'visible' } );
      }, 200);
    }
  };

  var node3To33 = function(navigationType) {
    var breakNavigation = false;
    if(level == 3 && navigationType == NavigationType.GRAPHIC) {
      breakNavigation = true;
    }

    if(currentState !== 'node-3-3' && !breakNavigation) {
      currentState = 'node-3-3';
      navigate(dataTree.root.node3.node3, true);
      changeLevel(3);

      $('.nav-node-3-child.level-2').show();
      $('.nav-node-3-3').first().addClass('active');

      setTimeout(function() {
        node3.attr( { cursor: 'pointer' } );
        node3.animate({ transform: 's0.60,0.60,t398,-266,r-2' }, 200, mina.linear);
        nodeRoot.animate({ transform: 's0.36,0.36,t-37,-808,r-18' }, 200, mina.linear);
        node33.attr( { visibility: 'visible' } );

        initNode3();
        resetNode3();

        node3Polygone3.attr( { visibility: 'hidden' } );
        node3Circle3.attr( { visibility: 'hidden' } );
        node3Text4.attr( { visibility: 'hidden' } );

        node33Polygone1.attr( { visibility: 'hidden', transform: 's0,0' } );
        node33Polygone1.attr( { visibility: 'visible' } );
        node33Polygone1.animate({ transform: 's1,1' }, 100, mina.linear);
      }, 50);

      setTimeout(function() {
        node33Polygone2.attr( { visibility: 'visible' } );
        node33Polygone2.animate({ transform: 's1,1' }, 300, mina.linear);
        node33Polygone3.attr( { visibility: 'visible' } );
        node33Polygone3.animate({ transform: 's1,1' }, 300, mina.linear);
        node33Polygone4.attr( { visibility: 'visible' } );
        node33Polygone4.animate({ transform: 's1,1' }, 300, mina.linear);
        node33Circle1.attr( { visibility: 'visible' } );
        node33Circle1.animate({ transform: 's1,1' }, 300, mina.linear);
        node33Circle2.attr( { visibility: 'visible' } );
        node33Circle2.animate({ transform: 's1,1' }, 300, mina.linear);
        node33Circle3.attr( { visibility: 'visible' } );
        node33Circle3.animate({ transform: 's1,1' }, 300, mina.linear);
        node33Text1.attr( { visibility: 'visible' } );
        node33Text2.attr( { visibility: 'visible' } );
        node33Text3.attr( { visibility: 'visible' } );
        node33Text4.attr( { visibility: 'visible' } );
      }, 200);
    }
  };

  var node31To311 = function() {
    if(currentState !== 'node-3-1-1') {
      currentState = 'node-3-1-1';
      navigate(dataTree.root.node3.node1.node1, false);
    }
  };

  var node31To312 = function() {
    if(currentState !== 'node-3-1-2') {
      currentState = 'node-3-1-2';
      navigate(dataTree.root.node3.node1.node2, false);
    }
  };

  var node31To313 = function() {
    if(currentState !== 'node-3-1-3') {
      currentState = 'node-3-1-3';
      navigate(dataTree.root.node3.node1.node3, false);
    }
  };

  var node32To321 = function() {
    if(currentState !== 'node-3-2-1') {
      currentState = 'node-3-2-1';
      navigate(dataTree.root.node3.node2.node1, false);
    }
  };

  var node32To322 = function() {
    if(currentState !== 'node-3-2-2') {
      currentState = 'node-3-2-2';
      navigate(dataTree.root.node3.node2.node2, false);
    }
  };

  var node32To323 = function() {
    if(currentState !== 'node-3-2-3') {
      currentState = 'node-3-2-3';
      navigate(dataTree.root.node3.node2.node3, false);
    }
  };

  var node33To331 = function() {
    if(currentState !== 'node-3-3-1') {
      currentState = 'node-3-3-1';
      navigate(dataTree.root.node3.node3.node1, false);
    }
  };

  var node33To332 = function() {
    if(currentState !== 'node-3-3-2') {
      currentState = 'node-3-3-2';
      navigate(dataTree.root.node3.node3.node2, false);
    }
  };

  var node33To333 = function() {
    if(currentState !== 'node-3-3-3') {
      currentState = 'node-3-3-3';
      navigate(dataTree.root.node3.node3.node3, false);
    }
  };

  var nodeRootTo4 = function(navigationType) {
    var breakNavigation = false;
    if(level == 2 && navigationType == NavigationType.GRAPHIC) {
      breakNavigation = true;
    }
    if(currentState !== 'node-4' && !breakNavigation) {
      currentState = 'node-4';
      navigate(dataTree.root.node4, true);
      changeLevel(2);

      $('.nav-node-4-child.level-2').show();
      $('.nav-node-4').addClass('active');

      setTimeout(function() {

        nodeRoot.animate({ transform: 's0.60,0.60,t-716,402,r-9' }, 200, mina.linear);
        nodeRoot.attr({ cursor: 'pointer' });

        node4.attr({ visibility: 'visible' });
        node4Polygone5.attr( { visibility: 'visible' } );
        node4Polygone5.animate({ transform: 's1,1' }, 100, mina.linear);

        resetNode4();

        nodeRootText4.attr( { visibility: 'hidden' } );
        nodeRootPolygone4.attr( { visibility: 'hidden' } );
        nodeRootCircle4.attr( { visibility: 'hidden' } );

        node4.animate({ transform: 's1,1' }, 200, mina.linear);
      }, 50);

      setTimeout(function() {
        node4Polygone1.attr( { visibility: 'visible' } );
        node4Polygone1.animate({ transform: 's1,1' }, 200, mina.linear);
        node4Polygone2.attr( { visibility: 'visible' } );
        node4Polygone2.animate({ transform: 's1,1' }, 200, mina.linear);
        node4Polygone3.attr( { visibility: 'visible' } );
        node4Polygone3.animate({ transform: 's1,1' }, 200, mina.linear);
        node4Polygone4.attr( { visibility: 'visible' } );
        node4Polygone4.animate({ transform: 's1,1' }, 200, mina.linear);
        node4Circle1.attr( { visibility: 'visible' } );
        node4Circle1.animate({ transform: 's1,1' }, 300, mina.linear);
        node4Circle2.attr( { visibility: 'visible' } );
        node4Circle2.animate({ transform: 's1,1' }, 300, mina.linear);
        node4Circle3.attr( { visibility: 'visible' } );
        node4Circle3.animate({ transform: 's1,1' }, 300, mina.linear);
        node4Circle4.attr( { visibility: 'visible' } );
        node4Circle4.animate({ transform: 's1,1' }, 300, mina.linear);
        node4Text1.attr( { visibility: 'visible' } );
        node4Text2.attr( { visibility: 'visible' } );
        node4Text3.attr( { visibility: 'visible' } );
        node4Text4.attr( { visibility: 'visible' } );
        node4Text5.attr( { visibility: 'visible' } );
      }, 200);
    }
  };

  var node4To41 = function(navigationType) {
    var breakNavigation = false;
    if(level == 3 && navigationType == NavigationType.GRAPHIC) {
      breakNavigation = true;
    }

    if(currentState !== 'node-4-1' && !breakNavigation) {
      currentState = 'node-4-1';
      navigate(dataTree.root.node4.node1, true);
      changeLevel(3);

      $('.nav-node-4-child.level-2').show();
      $('.nav-node-4-1').first().addClass('active');

      setTimeout(function() {
        node4.attr( { cursor: 'pointer' } );
        node4.animate({ transform: 's0.60,0.60,t635,355,r-9' }, 200, mina.linear);
        nodeRoot.animate({ transform: 's0.36,0.36,t358,1180,r-17' }, 200, mina.linear);
        node41.attr( { visibility: 'visible' } );

        initNode4();
        resetNode4();

        node4Polygone1.attr( { visibility: 'hidden' } );
        node4Circle1.attr( { visibility: 'hidden' } );
        node4Text2.attr( { visibility: 'hidden' } );

        node41Polygone3.attr( { visibility: 'hidden', transform: 's0,0' } );
        node41Polygone3.attr( { visibility: 'visible' } );
        node41Polygone3.animate({ transform: 's1,1' }, 100, mina.linear);
      }, 50);

      setTimeout(function() {
        node41Polygone1.attr( { visibility: 'visible' } );
        node41Polygone1.animate({ transform: 's1,1' }, 300, mina.linear);
        node41Polygone2.attr( { visibility: 'visible' } );
        node41Polygone2.animate({ transform: 's1,1' }, 300, mina.linear);
        node41Polygone4.attr( { visibility: 'visible' } );
        node41Polygone4.animate({ transform: 's1,1' }, 300, mina.linear);
        node41Circle1.attr( { visibility: 'visible' } );
        node41Circle1.animate({ transform: 's1,1' }, 300, mina.linear);
        node41Circle2.attr( { visibility: 'visible' } );
        node41Circle2.animate({ transform: 's1,1' }, 300, mina.linear);
        node41Circle3.attr( { visibility: 'visible' } );
        node41Circle3.animate({ transform: 's1,1' }, 300, mina.linear);
        node41Text1.attr( { visibility: 'visible' } );
        node41Text2.attr( { visibility: 'visible' } );
        node41Text3.attr( { visibility: 'visible' } );
        node41Text4.attr( { visibility: 'visible' } );
      }, 200);
    }
  };

  var node4To42 = function() {
    if(currentState !== 'node-4-2') {
      currentState = 'node-4-2';
      navigate(dataTree.root.node4.node2, false);
    }
  };

  var node4To43 = function() {
    if(currentState !== 'node-4-3') {
      currentState = 'node-4-3';
      navigate(dataTree.root.node4.node3, false);
    }
  };

  var node4To44 = function(navigationType) {
    var breakNavigation = false;
    if(level == 3 && navigationType == NavigationType.GRAPHIC) {
      breakNavigation = true;
    }

    if(currentState !== 'node-4-4' && !breakNavigation) {
      currentState = 'node-4-4';
      navigate(dataTree.root.node4.node1, true);
      changeLevel(3);

      $('.nav-node-4-child.level-2').show();
      $('.nav-node-4-4').first().addClass('active');

      setTimeout(function() {
        node4.attr( { cursor: 'pointer' } );
        node4.animate({ transform: 's0.60,0.60,t-485,-433,r-16' }, 200, mina.linear);
        nodeRoot.animate({ transform: 's0.36,0.36,t-1450,-50,r-26' }, 200, mina.linear);
        node44.attr( { visibility: 'visible' } );

        initNode4();
        resetNode4();

        node4Polygone2.attr( { visibility: 'hidden' } );
        node4Circle4.attr( { visibility: 'hidden' } );
        node4Text5.attr( { visibility: 'hidden' } );

        node44Polygone3.attr( { visibility: 'hidden', transform: 's0,0' } );
        node44Polygone3.attr( { visibility: 'visible' } );
        node44Polygone3.animate({ transform: 's1,1' }, 100, mina.linear);
      }, 50);

      setTimeout(function() {
        node44Polygone1.attr( { visibility: 'visible' } );
        node44Polygone1.animate({ transform: 's1,1' }, 300, mina.linear);
        node44Polygone2.attr( { visibility: 'visible' } );
        node44Polygone2.animate({ transform: 's1,1' }, 300, mina.linear);
        node44Polygone4.attr( { visibility: 'visible' } );
        node44Polygone4.animate({ transform: 's1,1' }, 300, mina.linear);
        node44Circle1.attr( { visibility: 'visible' } );
        node44Circle1.animate({ transform: 's1,1' }, 300, mina.linear);
        node44Circle2.attr( { visibility: 'visible' } );
        node44Circle2.animate({ transform: 's1,1' }, 300, mina.linear);
        node44Circle3.attr( { visibility: 'visible' } );
        node44Circle3.animate({ transform: 's1,1' }, 300, mina.linear);
        node44Text1.attr( { visibility: 'visible' } );
        node44Text2.attr( { visibility: 'visible' } );
        node44Text3.attr( { visibility: 'visible' } );
        node44Text4.attr( { visibility: 'visible' } );
      }, 200);
    }
  };

  var node41To411 = function() {
    if(currentState !== 'node-4-1-1') {
      currentState = 'node-4-1-1';
      navigate(dataTree.root.node4.node1.node1, false);
    }
  };

  var node41To412 = function() {
    if(currentState !== 'node-4-1-2') {
      currentState = 'node-4-1-2';
      navigate(dataTree.root.node4.node1.node2, false);
    }
  };

  var node41To413 = function() {
    if(currentState !== 'node-4-1-3') {
      currentState = 'node-4-1-3';
      navigate(dataTree.root.node4.node1.node3, false);
    }
  };

  var node44To441 = function() {
    if(currentState !== 'node-4-4-1') {
      currentState = 'node-4-4-1';
      navigate(dataTree.root.node4.node4.node1, false);
    }
  };

  var node44To442 = function() {
    if(currentState !== 'node-4-4-2') {
      currentState = 'node-4-4-2';
      navigate(dataTree.root.node4.node4.node2, false);
    }
  };

  var node44To443 = function() {
    if(currentState !== 'node-4-4-3') {
      currentState = 'node-4-4-3';
      navigate(dataTree.root.node4.node4.node3, false);
    }
  };

  var nodeRootTo5 = function(navigationType) {
    var breakNavigation = false;
    if(level == 2 && navigationType == NavigationType.GRAPHIC) {
      breakNavigation = true;
    }
    if(currentState !== 'node-5' && !breakNavigation) {
      currentState = 'node-5';
      navigate(dataTree.root.node5, true);
      changeLevel(2);

      $('.nav-node-5-child.level-2').show();
      $('.nav-node-5').addClass('active');

      setTimeout(function() {

        nodeRoot.animate({ transform: 's0.60,0.60,t-698,468,r4' }, 200, mina.linear);
        nodeRoot.attr({ cursor: 'pointer' });

        node5.attr({ visibility: 'visible' });
        node5Polygone4.attr( { visibility: 'visible' } );
        node5Polygone4.animate({ transform: 's1,1' }, 100, mina.linear);

        resetNode5();

        nodeRootText5.attr( { visibility: 'hidden' } );
        nodeRootPolygone5.attr( { visibility: 'hidden' } );
        nodeRootCircle5.attr( { visibility: 'hidden' } );

        node5.animate({ transform: 's1,1' }, 200, mina.linear);
      }, 50);

      setTimeout(function() {
        node5Polygone1.attr( { visibility: 'visible' } );
        node5Polygone1.animate({ transform: 's1,1' }, 200, mina.linear);
        node5Polygone2.attr( { visibility: 'visible' } );
        node5Polygone2.animate({ transform: 's1,1' }, 200, mina.linear);
        node5Polygone3.attr( { visibility: 'visible' } );
        node5Polygone3.animate({ transform: 's1,1' }, 200, mina.linear);
        node5Circle1.attr( { visibility: 'visible' } );
        node5Circle1.animate({ transform: 's1,1' }, 300, mina.linear);
        node5Circle2.attr( { visibility: 'visible' } );
        node5Circle2.animate({ transform: 's1,1' }, 300, mina.linear);
        node5Circle3.attr( { visibility: 'visible' } );
        node5Circle3.animate({ transform: 's1,1' }, 300, mina.linear);
        node5Text1.attr( { visibility: 'visible' } );
        node5Text2.attr( { visibility: 'visible' } );
        node5Text3.attr( { visibility: 'visible' } );
        node5Text4.attr( { visibility: 'visible' } );
      }, 200);
    }
  };

  var node5To51 = function(navigationType) {
    var breakNavigation = false;
    if(level == 3 && navigationType == NavigationType.GRAPHIC) {
      breakNavigation = true;
    }

    if(currentState !== 'node-5-1' && !breakNavigation) {
      currentState = 'node-5-1';
      navigate(dataTree.root.node2.node2, true);
      changeLevel(3);

      $('.nav-node-5-child.level-2').show();
      $('.nav-node-5-1').first().addClass('active');

      setTimeout(function() {
        node5.attr( { cursor: 'pointer' } );
        node5.animate({ transform: 's0.60,0.60,t874,430,r-1' }, 200, mina.linear);
        nodeRoot.animate({ transform: 's0.36,0.36,t695,1197,r2' }, 200, mina.linear);
        node51.attr( { visibility: 'visible' } );

        initNode5();
        resetNode5();

        node5Polygone1.attr( { visibility: 'hidden' } );
        node5Circle1.attr( { visibility: 'hidden' } );
        node5Text2.attr( { visibility: 'hidden' } );

        node51Polygone1.attr( { visibility: 'hidden', transform: 's0,0' } );
        node51Polygone1.attr( { visibility: 'visible' } );
        node51Polygone1.animate({ transform: 's1,1' }, 100, mina.linear);
      }, 50);

      setTimeout(function() {
        node51Polygone1.attr( { visibility: 'visible' } );
        node51Polygone1.animate({ transform: 's1,1' }, 300, mina.linear);
        node51Polygone2.attr( { visibility: 'visible' } );
        node51Polygone2.animate({ transform: 's1,1' }, 300, mina.linear);
        node51Polygone3.attr( { visibility: 'visible' } );
        node51Polygone3.animate({ transform: 's1,1' }, 300, mina.linear);
        node51Polygone4.attr( { visibility: 'visible' } );
        node51Polygone4.animate({ transform: 's1,1' }, 300, mina.linear);
        node51Polygone5.attr( { visibility: 'visible' } );
        node51Polygone5.animate({ transform: 's1,1' }, 300, mina.linear);
        node51Circle1.attr( { visibility: 'visible' } );
        node51Circle1.animate({ transform: 's1,1' }, 300, mina.linear);
        node51Circle2.attr( { visibility: 'visible' } );
        node51Circle2.animate({ transform: 's1,1' }, 300, mina.linear);
        node51Circle3.attr( { visibility: 'visible' } );
        node51Circle3.animate({ transform: 's1,1' }, 300, mina.linear);
        node51Text1.attr( { visibility: 'visible' } );
        node51Text2.attr( { visibility: 'visible' } );
        node51Text3.attr( { visibility: 'visible' } );
        node51Text4.attr( { visibility: 'visible' } );
      }, 200);
    }
  };

  var node5To52 = function(navigationType) {
    var breakNavigation = false;
    if(level == 3 && navigationType == NavigationType.GRAPHIC) {
      breakNavigation = true;
    }

    if(currentState !== 'node-5-2' && !breakNavigation) {
      currentState = 'node-5-2';
      navigate(dataTree.root.node2.node2, true);
      changeLevel(3);

      $('.nav-node-5-child.level-2').show();
      $('.nav-node-5-2').first().addClass('active');

      setTimeout(function() {
        node5.attr( { cursor: 'pointer' } );
        node5.animate({ transform: 's0.60,0.60,t-464,410,r-1' }, 200, mina.linear);
        nodeRoot.animate({ transform: 's0.36,0.36,t-1530,1165,r2' }, 200, mina.linear);
        node52.attr( { visibility: 'visible' } );

        initNode5();
        resetNode5();

        node5Polygone2.attr( { visibility: 'hidden' } );
        node5Circle2.attr( { visibility: 'hidden' } );
        node5Text3.attr( { visibility: 'hidden' } );

        node52Polygone4.attr( { visibility: 'hidden', transform: 's0,0' } );
        node52Polygone4.attr( { visibility: 'visible' } );
        node52Polygone4.animate({ transform: 's1,1' }, 100, mina.linear);
      }, 50);

      setTimeout(function() {
        node52Polygone1.attr( { visibility: 'visible' } );
        node52Polygone1.animate({ transform: 's1,1' }, 300, mina.linear);
        node52Polygone2.attr( { visibility: 'visible' } );
        node52Polygone2.animate({ transform: 's1,1' }, 300, mina.linear);
        node52Polygone3.attr( { visibility: 'visible' } );
        node52Polygone3.animate({ transform: 's1,1' }, 300, mina.linear);
        node52Polygone5.attr( { visibility: 'visible' } );
        node52Polygone5.animate({ transform: 's1,1' }, 300, mina.linear);
        node52Circle1.attr( { visibility: 'visible' } );
        node52Circle1.animate({ transform: 's1,1' }, 300, mina.linear);
        node52Circle2.attr( { visibility: 'visible' } );
        node52Circle2.animate({ transform: 's1,1' }, 300, mina.linear);
        node52Circle3.attr( { visibility: 'visible' } );
        node52Circle3.animate({ transform: 's1,1' }, 300, mina.linear);
        node52Circle4.attr( { visibility: 'visible' } );
        node52Circle4.animate({ transform: 's1,1' }, 300, mina.linear);
        node52Text1.attr( { visibility: 'visible' } );
        node52Text2.attr( { visibility: 'visible' } );
        node52Text3.attr( { visibility: 'visible' } );
        node52Text4.attr( { visibility: 'visible' } );
        node52Text5.attr( { visibility: 'visible' } );
      }, 200);
    }
  };

  var node5To53 = function(navigationType) {
    var breakNavigation = false;
    if(level == 3 && navigationType == NavigationType.GRAPHIC) {
      breakNavigation = true;
    }

    if(currentState !== 'node-5-3' && !breakNavigation) {
      currentState = 'node-5-3';
      navigate(dataTree.root.node2.node2, true);
      changeLevel(3);

      $('.nav-node-5-child.level-2').show();
      $('.nav-node-5-3').first().addClass('active');

      setTimeout(function() {
        node5.attr( { cursor: 'pointer' } );
        node5.animate({ transform: 's0.60,0.60,t-542,-195,r-1' }, 200, mina.linear);
        nodeRoot.animate({ transform: 's0.36,0.36,t-1665,155,r2' }, 200, mina.linear);
        node53.attr( { visibility: 'visible' } );

        initNode5();
        resetNode5();

        node5Polygone3.attr( { visibility: 'hidden' } );
        node5Circle3.attr( { visibility: 'hidden' } );
        node5Text4.attr( { visibility: 'hidden' } );

        node53Polygone4.attr( { visibility: 'hidden', transform: 's0,0' } );
        node53Polygone4.attr( { visibility: 'visible' } );
        node53Polygone4.animate({ transform: 's1,1' }, 100, mina.linear);
      }, 50);

      setTimeout(function() {
        node53Polygone1.attr( { visibility: 'visible' } );
        node53Polygone1.animate({ transform: 's1,1' }, 300, mina.linear);
        node53Polygone2.attr( { visibility: 'visible' } );
        node53Polygone2.animate({ transform: 's1,1' }, 300, mina.linear);
        node53Polygone3.attr( { visibility: 'visible' } );
        node53Polygone3.animate({ transform: 's1,1' }, 300, mina.linear);
        node53Polygone5.attr( { visibility: 'visible' } );
        node53Polygone5.animate({ transform: 's1,1' }, 300, mina.linear);
        node53Circle1.attr( { visibility: 'visible' } );
        node53Circle1.animate({ transform: 's1,1' }, 300, mina.linear);
        node53Circle2.attr( { visibility: 'visible' } );
        node53Circle2.animate({ transform: 's1,1' }, 300, mina.linear);
        node53Circle3.attr( { visibility: 'visible' } );
        node53Circle3.animate({ transform: 's1,1' }, 300, mina.linear);
        node53Circle4.attr( { visibility: 'visible' } );
        node53Circle4.animate({ transform: 's1,1' }, 300, mina.linear);
        node53Text1.attr( { visibility: 'visible' } );
        node53Text2.attr( { visibility: 'visible' } );
        node53Text3.attr( { visibility: 'visible' } );
        node53Text4.attr( { visibility: 'visible' } );
        node53Text5.attr( { visibility: 'visible' } );
      }, 200);
    }
  };

  var node51To511 = function() {
    if(currentState !== 'node-5-1-1') {
      currentState = 'node-5-1-1';
      navigate(dataTree.root.node5.node1.node1, false);
    }
  };

  var node51To512 = function() {
    if(currentState !== 'node-5-1-2') {
      currentState = 'node-5-1-2';
      navigate(dataTree.root.node5.node1.node2, false);
    }
  };

  var node51To513 = function() {
    if(currentState !== 'node-5-1-3') {
      currentState = 'node-5-1-3';
      navigate(dataTree.root.node5.node1.node3, false);
    }
  };

  var node52To521 = function() {
    if(currentState !== 'node-5-2-1') {
      currentState = 'node-5-2-1';
      navigate(dataTree.root.node5.node2.node1, false);
    }
  };

  var node52To522 = function() {
    if(currentState !== 'node-5-2-2') {
      currentState = 'node-5-2-2';
      navigate(dataTree.root.node5.node2.node2, false);
    }
  };

  var node52To523 = function() {
    if(currentState !== 'node-5-2-3') {
      currentState = 'node-5-2-3';
      navigate(dataTree.root.node5.node2.node3, false);
    }
  };

  var node52To524 = function() {
    if(currentState !== 'node-5-2-4') {
      currentState = 'node-5-2-4';
      navigate(dataTree.root.node5.node2.node4, false);
    }
  };

  var node53To531 = function() {
    if(currentState !== 'node-5-3-1') {
      currentState = 'node-5-3-1';
      navigate(dataTree.root.node5.node3.node1, false);
    }
  };

  var node53To532 = function() {
    if(currentState !== 'node-5-3-2') {
      currentState = 'node-5-3-2';
      navigate(dataTree.root.node5.node3.node2, false);
    }
  };

  var node53To533 = function() {
    if(currentState !== 'node-5-3-3') {
      currentState = 'node-5-3-3';
      navigate(dataTree.root.node5.node3.node3, false);
    }
  };

  var node53To534 = function() {
    if(currentState !== 'node-5-3-4') {
      currentState = 'node-5-3-4';
      navigate(dataTree.root.node5.node3.node4, false);
    }
  };

  var getCurrentColor = function(theme) {
    var currentColor;
    switch(theme) {
      case '1':
        currentColor = '#DE6068';
        break;
      case '2':
        currentColor = '#3EAF66';
        break;
      case '3':
        currentColor = '#3D5E89';
        break;
      case '4':
        currentColor = '#9748BC';
        break;
      case '5':
        currentColor = '#727272';
        break;
    }
    return currentColor;
  }

  var changeLevel = function(newLevel) {

    $('.active').removeClass('active');
    $('.level-2').hide();

    if(newLevel == 2) {
      currentTheme = currentState.match(/\d+/)[0];
      var currentColor = getCurrentColor(currentTheme);
      $('.content-window-bar').css('background-color', currentColor);
      $('.content-window-bar-mobile').css('background-color', currentColor);
    }

    if(newLevel !== 1) {
      $('.nav-back-link').removeClass('hidden');
      $('.nav-overview-link').removeClass('hidden');
    } else {
      $('.nav-back-link').addClass('hidden');
      $('.nav-overview-link').addClass('hidden');
    }

    if(newLevel == 1) {
      if(nodeRoot) {
        nodeRoot.removeClass('hidden-sm hidden-xs');
        node1.removeClass('hidden-sm hidden-xs');
        animatingCircles = level1Circles;
        $('.level-2').hide();
      }
    } else if(newLevel == 2) {
      nodeRoot.addClass('hidden-sm hidden-xs');
      node1.removeClass('hidden-sm hidden-xs');
      animatingCircles = level2Circles;
      $('.level-3').hide();
    } else if (newLevel == 3) {
      node1.addClass('hidden-sm hidden-xs');
      animatingCircles = level3Circles;
    }
    level = newLevel;
  }

  var isBreakpoint = function (alias) {
    return $('.device-' + alias).is(':visible');
  }

  $(window).resize(function () {
    if( isBreakpoint('xs') || isBreakpoint('sm') ) {
      if(scaledForMobile === false) {
        backToRoot(true);
        scaleForMobile();
      }
    } else {
      if(scaledForMobile === true) {
        backToRoot(true);
        scaleForDesktop();
      }
    }
  });

  var navigate = function(node, changeNavigationInfo) {
    if(changeNavigationInfo) {
      $('#dropdown-toggle-text').html(node.title);
    }
    if(node.content) {
      $('.content-window-headline').html(node.title);
      $('.content-window-content-text').html(node.content);
      $('.content-window-headline-mobile').html(node.title);
      $('.content-window-content-text-mobile').html(node.content);
      if(node.link) {
        $('.content-window-content-link').show();
        $('.content-window-content-link-mobile').show();
        $('.content-window-content-link span').css( 'padding-right', '7px');
        $('.content-window-content-link-mobile span').css( 'padding-right', '7px');
        if(node.linkTheme) {
          var color = getCurrentColor(node.linkTheme);
          $('.content-window-content-link span').css('color', color);
          $('.content-window-content-link-mobile span').css('color', color);
        } else {
          $('.content-window-content-link span').css('color', '');
          $('.content-window-content-link-mobile span').css('color', '');
        }
        $('.content-window-content-link a').html(objectByString(dataTree, node.link + '.title'));
        $('.content-window-content-link a').attr('id', 'node-link-' + node.link.split('.').join(''));
        $('.content-window-content-link-mobile a').html(objectByString(dataTree, node.link + '.title'));
        $('.content-window-content-link-mobile a').attr('id', 'node-link-' + node.link.split('.').join('') + '-mobile');
        rebindNodeLinks();
      } else {
        $('.content-window-content-link').hide();
        $('.content-window-content-link-mobile').hide();
      }
      showContentWindow();
    } else {
      hideContentWindow();
    }
  };

  var toggleContentWindow = function() {
    if($('.content-window').is(':visible') || $('.content-window').is(':visible')) {
      $('.content-window').hide();
      $('.content-window-mobile').hide();
    } else {
      $('.content-window').show();
      $('.content-window-mobile').show();
    }
  };

  var hideContentWindow = function() {
    $('.content-window').hide();
    $('.content-window-mobile').hide();
  };

  var showContentWindow = function() {
    $('.content-window').show();
    $('.content-window-mobile').show();
  };

  var scaleForMobile = function() {
    mainGroup.animate({ transform: 's1.20,s1.20' }, 200, mina.linear);
    scaledForMobile = true;
  }

  var scaleForDesktop = function() {
    mainGroup.animate({ transform: 's1,1' }, 200, mina.linear);
    scaledForMobile = false;
  }

  var currentState = 'node-root';
  var level = 0;
  var currentTheme;
  var scaledForMobile = false;

  // Init
  changeLevel(1);

  var mainGroup = Snap.select('#main-group');
  var circles = Snap.select('#circles');

  var level1Circles = Snap.selectAll('.level-1-circle');
  var level2Circles = Snap.selectAll('.level-2-circle');
  var level3Circles = Snap.selectAll('.level-3-circle');

  var nodeRoot = Snap.select('#node-root');
  var nodeRootPolygone1 = Snap.select('#node-root-polygone-1');
  var nodeRootCircle1 = Snap.select('#node-root-circle-1');
  var nodeRootText1 = Snap.select('#node-root-text-1');
  var nodeRootPolygone2 = Snap.select('#node-root-polygone-2');
  var nodeRootCircle2 = Snap.select('#node-root-circle-2');
  var nodeRootText2 = Snap.select('#node-root-text-2');
  var nodeRootPolygone3 = Snap.select('#node-root-polygone-3');
  var nodeRootCircle3 = Snap.select('#node-root-circle-3');
  var nodeRootText3 = Snap.select('#node-root-text-3');
  var nodeRootPolygone4 = Snap.select('#node-root-polygone-4');
  var nodeRootCircle4 = Snap.select('#node-root-circle-4');
  var nodeRootText4 = Snap.select('#node-root-text-4');
  var nodeRootPolygone5 = Snap.select('#node-root-polygone-5');
  var nodeRootCircle5 = Snap.select('#node-root-circle-5');
  var nodeRootText5 = Snap.select('#node-root-text-5');

  var node1 = Snap.select('#node-1');
  var node1Polygone1 = Snap.select('#node-1-polygone-1');
  var node1Polygone2 = Snap.select('#node-1-polygone-2');
  var node1Polygone2Mobile = Snap.select('#node-1-polygone-2-mobile');
  var node1Polygone3 = Snap.select('#node-1-polygone-3');
  var node1Polygone4 = Snap.select('#node-1-polygone-4');
  var node1Circle1 = Snap.select('#node-1-circle-1');
  var node1Circle2 = Snap.select('#node-1-circle-2');
  var node1Circle3 = Snap.select('#node-1-circle-3');
  var node1Text1 = Snap.select('#node-1-text-1');
  var node1Text2 = Snap.select('#node-1-text-2');
  var node1Text3 = Snap.select('#node-1-text-3');

  var node11 = Snap.select('#node-1-1');
  var node11Polygone1 = Snap.select('#node-1-1-polygone-1');
  var node11Polygone2 = Snap.select('#node-1-1-polygone-2');
  var node11Polygone3 = Snap.select('#node-1-1-polygone-3');
  var node11Polygone4 = Snap.select('#node-1-1-polygone-4');
  var node11Polygone5 = Snap.select('#node-1-1-polygone-5');
  var node11Polygone6 = Snap.select('#node-1-1-polygone-6');
  var node11Polygone6Mobile = Snap.select('#node-1-1-polygone-6-mobile');
  var node11Polygone7 = Snap.select('#node-1-1-polygone-7');
  var node11Polygone8 = Snap.select('#node-1-1-polygone-8');
  var node11Circle1 = Snap.select('#node-1-1-circle-1');
  var node11Circle2 = Snap.select('#node-1-1-circle-2');
  var node11Circle3 = Snap.select('#node-1-1-circle-3');
  var node11Circle4 = Snap.select('#node-1-1-circle-4');
  var node11Circle5 = Snap.select('#node-1-1-circle-5');
  var node11Text1 = Snap.select('#node-1-1-text-1');
  var node11Text2 = Snap.select('#node-1-1-text-2');
  var node11Text3 = Snap.select('#node-1-1-text-3');
  var node11Text4 = Snap.select('#node-1-1-text-4');
  var node11Text5 = Snap.select('#node-1-1-text-5');
  var node11Text6 = Snap.select('#node-1-1-text-6');

  var node12 = Snap.select('#node-1-2');
  var node12Polygone1 = Snap.select('#node-1-2-polygone-1');
  var node12Polygone2 = Snap.select('#node-1-2-polygone-2');
  var node12Polygone3 = Snap.select('#node-1-2-polygone-3');
  var node12Polygone4 = Snap.select('#node-1-2-polygone-4');
  var node12Circle1 = Snap.select('#node-1-2-circle-1');
  var node12Circle2 = Snap.select('#node-1-2-circle-2');
  var node12Circle3 = Snap.select('#node-1-2-circle-3');
  var node12Text1 = Snap.select('#node-1-2-text-1');
  var node12Text2 = Snap.select('#node-1-2-text-2');
  var node12Text3 = Snap.select('#node-1-2-text-3');
  var node12Text4 = Snap.select('#node-1-2-text-4');

  var node13 = Snap.select('#node-1-3');
  var node13Polygone1 = Snap.select('#node-1-3-polygone-1');
  var node13Polygone2 = Snap.select('#node-1-3-polygone-2');
  var node13Polygone3 = Snap.select('#node-1-3-polygone-3');
  var node13Polygone4 = Snap.select('#node-1-3-polygone-4');
  var node13Polygone5 = Snap.select('#node-1-3-polygone-5');
  var node13Polygone6 = Snap.select('#node-1-3-polygone-6');
  var node13Polygone7 = Snap.select('#node-1-3-polygone-7');
  var node13Polygone8 = Snap.select('#node-1-3-polygone-8');
  var node13Polygone9 = Snap.select('#node-1-3-polygone-9');
  var node13Circle1 = Snap.select('#node-1-3-circle-1');
  var node13Circle2 = Snap.select('#node-1-3-circle-2');
  var node13Circle3 = Snap.select('#node-1-3-circle-3');
  var node13Circle4 = Snap.select('#node-1-3-circle-4');
  var node13Circle5 = Snap.select('#node-1-3-circle-5');
  var node13Circle6 = Snap.select('#node-1-3-circle-6');
  var node13Circle7 = Snap.select('#node-1-3-circle-7');
  var node13Text1 = Snap.select('#node-1-3-text-1');
  var node13Text2 = Snap.select('#node-1-3-text-2');
  var node13Text3 = Snap.select('#node-1-3-text-3');
  var node13Text4 = Snap.select('#node-1-3-text-4');
  var node13Text5 = Snap.select('#node-1-3-text-5');
  var node13Text6 = Snap.select('#node-1-3-text-6');
  var node13Text7 = Snap.select('#node-1-3-text-7');
  var node13Text8 = Snap.select('#node-1-3-text-8');

  var node2 = Snap.select('#node-2');
  var node2Polygone1 = Snap.select('#node-2-polygone-1');
  var node2Polygone2 = Snap.select('#node-2-polygone-2');
  var node2Polygone3 = Snap.select('#node-2-polygone-3');
  var node2Circle1 = Snap.select('#node-2-circle-1');
  var node2Circle2 = Snap.select('#node-2-circle-2');
  var node2Text1 = Snap.select('#node-2-text-1');
  var node2Text2 = Snap.select('#node-2-text-2');
  var node2Text3 = Snap.select('#node-2-text-3');

  var node21 = Snap.select('#node-2-1');
  var node21Polygone1 = Snap.select('#node-2-1-polygone-1');
  var node21Polygone2 = Snap.select('#node-2-1-polygone-2');
  var node21Polygone3 = Snap.select('#node-2-1-polygone-3');
  var node21Polygone4 = Snap.select('#node-2-1-polygone-4');
  var node21Polygone5 = Snap.select('#node-2-1-polygone-5');
  var node21Polygone6 = Snap.select('#node-2-1-polygone-6');
  var node21Polygone7 = Snap.select('#node-2-1-polygone-7');
  var node21Polygone8 = Snap.select('#node-2-1-polygone-8');
  var node21Polygone9 = Snap.select('#node-2-1-polygone-9');
  var node21Circle1 = Snap.select('#node-2-1-circle-1');
  var node21Circle2 = Snap.select('#node-2-1-circle-2');
  var node21Circle3 = Snap.select('#node-2-1-circle-3');
  var node21Circle4 = Snap.select('#node-2-1-circle-4');
  var node21Circle5 = Snap.select('#node-2-1-circle-5');
  var node21Circle6 = Snap.select('#node-2-1-circle-6');
  var node21Circle7 = Snap.select('#node-2-1-circle-7');
  var node21Text1 = Snap.select('#node-2-1-text-1');
  var node21Text2 = Snap.select('#node-2-1-text-2');
  var node21Text3 = Snap.select('#node-2-1-text-3');
  var node21Text4 = Snap.select('#node-2-1-text-4');
  var node21Text5 = Snap.select('#node-2-1-text-5');
  var node21Text6 = Snap.select('#node-2-1-text-6');
  var node21Text7 = Snap.select('#node-2-1-text-7');
  var node21Text8 = Snap.select('#node-2-1-text-8');

  var node22 = Snap.select('#node-2-2');
  var node22Polygone1 = Snap.select('#node-2-2-polygone-1');
  var node22Polygone2 = Snap.select('#node-2-2-polygone-2');
  var node22Polygone3 = Snap.select('#node-2-2-polygone-3');
  var node22Polygone4 = Snap.select('#node-2-2-polygone-4');
  var node22Polygone5 = Snap.select('#node-2-2-polygone-5');
  var node22Polygone6 = Snap.select('#node-2-2-polygone-6');
  var node22Polygone7 = Snap.select('#node-2-2-polygone-7');
  var node22Circle1 = Snap.select('#node-2-2-circle-1');
  var node22Circle2 = Snap.select('#node-2-2-circle-2');
  var node22Circle3 = Snap.select('#node-2-2-circle-3');
  var node22Circle4 = Snap.select('#node-2-2-circle-4');
  var node22Circle5 = Snap.select('#node-2-2-circle-5');
  var node22Circle6 = Snap.select('#node-2-2-circle-6');
  var node22Text1 = Snap.select('#node-2-2-text-1');
  var node22Text2 = Snap.select('#node-2-2-text-2');
  var node22Text3 = Snap.select('#node-2-2-text-3');
  var node22Text4 = Snap.select('#node-2-2-text-4');
  var node22Text5 = Snap.select('#node-2-2-text-5');
  var node22Text6 = Snap.select('#node-2-2-text-6');
  var node22Text7 = Snap.select('#node-2-2-text-7');

  var node3 = Snap.select('#node-3');
  var node3Polygone1 = Snap.select('#node-3-polygone-1');
  var node3Polygone2 = Snap.select('#node-3-polygone-2');
  var node3Polygone3 = Snap.select('#node-3-polygone-3');
  var node3Polygone4 = Snap.select('#node-3-polygone-4');
  var node3Circle1 = Snap.select('#node-3-circle-1');
  var node3Circle2 = Snap.select('#node-3-circle-2');
  var node3Circle3 = Snap.select('#node-3-circle-3');
  var node3Text1 = Snap.select('#node-3-text-1');
  var node3Text2 = Snap.select('#node-3-text-2');
  var node3Text3 = Snap.select('#node-3-text-3');
  var node3Text4 = Snap.select('#node-3-text-4');

  var node31 = Snap.select('#node-3-1');
  var node31Polygone1 = Snap.select('#node-3-1-polygone-1');
  var node31Polygone2 = Snap.select('#node-3-1-polygone-2');
  var node31Polygone3 = Snap.select('#node-3-1-polygone-3');
  var node31Polygone4 = Snap.select('#node-3-1-polygone-4');
  var node31Circle1 = Snap.select('#node-3-1-circle-1');
  var node31Circle2 = Snap.select('#node-3-1-circle-2');
  var node31Circle3 = Snap.select('#node-3-1-circle-3');
  var node31Text1 = Snap.select('#node-3-1-text-1');
  var node31Text2 = Snap.select('#node-3-1-text-2');
  var node31Text3 = Snap.select('#node-3-1-text-3');
  var node31Text4 = Snap.select('#node-3-1-text-4');

  var node32 = Snap.select('#node-3-2');
  var node32Polygone1 = Snap.select('#node-3-2-polygone-1');
  var node32Polygone2 = Snap.select('#node-3-2-polygone-2');
  var node32Polygone3 = Snap.select('#node-3-2-polygone-3');
  var node32Polygone4 = Snap.select('#node-3-2-polygone-4');
  var node32Circle1 = Snap.select('#node-3-2-circle-1');
  var node32Circle2 = Snap.select('#node-3-2-circle-2');
  var node32Circle3 = Snap.select('#node-3-2-circle-3');
  var node32Text1 = Snap.select('#node-3-2-text-1');
  var node32Text2 = Snap.select('#node-3-2-text-2');
  var node32Text3 = Snap.select('#node-3-2-text-3');
  var node32Text4 = Snap.select('#node-3-2-text-4');

  var node33 = Snap.select('#node-3-3');
  var node33Polygone1 = Snap.select('#node-3-3-polygone-1');
  var node33Polygone2 = Snap.select('#node-3-3-polygone-2');
  var node33Polygone3 = Snap.select('#node-3-3-polygone-3');
  var node33Polygone4 = Snap.select('#node-3-3-polygone-4');
  var node33Circle1 = Snap.select('#node-3-3-circle-1');
  var node33Circle2 = Snap.select('#node-3-3-circle-2');
  var node33Circle3 = Snap.select('#node-3-3-circle-3');
  var node33Text1 = Snap.select('#node-3-3-text-1');
  var node33Text2 = Snap.select('#node-3-3-text-2');
  var node33Text3 = Snap.select('#node-3-3-text-3');
  var node33Text4 = Snap.select('#node-3-3-text-4');

  var node4 = Snap.select('#node-4');
  var node4Polygone1 = Snap.select('#node-4-polygone-1');
  var node4Polygone2 = Snap.select('#node-4-polygone-2');
  var node4Polygone3 = Snap.select('#node-4-polygone-3');
  var node4Polygone4 = Snap.select('#node-4-polygone-4');
  var node4Polygone5 = Snap.select('#node-4-polygone-5');
  var node4Circle1 = Snap.select('#node-4-circle-1');
  var node4Circle2 = Snap.select('#node-4-circle-2');
  var node4Circle3 = Snap.select('#node-4-circle-3');
  var node4Circle4 = Snap.select('#node-4-circle-4');
  var node4Text1 = Snap.select('#node-4-text-1');
  var node4Text2 = Snap.select('#node-4-text-2');
  var node4Text3 = Snap.select('#node-4-text-3');
  var node4Text4 = Snap.select('#node-4-text-4');
  var node4Text5 = Snap.select('#node-4-text-5');

  var node41 = Snap.select('#node-4-1');
  var node41Polygone1 = Snap.select('#node-4-1-polygone-1');
  var node41Polygone2 = Snap.select('#node-4-1-polygone-2');
  var node41Polygone3 = Snap.select('#node-4-1-polygone-3');
  var node41Polygone4 = Snap.select('#node-4-1-polygone-4');
  var node41Circle1 = Snap.select('#node-4-1-circle-1');
  var node41Circle2 = Snap.select('#node-4-1-circle-2');
  var node41Circle3 = Snap.select('#node-4-1-circle-3');
  var node41Text1 = Snap.select('#node-4-1-text-1');
  var node41Text2 = Snap.select('#node-4-1-text-2');
  var node41Text3 = Snap.select('#node-4-1-text-3');
  var node41Text4 = Snap.select('#node-4-1-text-4');

  var node44 = Snap.select('#node-4-4');
  var node44Polygone1 = Snap.select('#node-4-4-polygone-1');
  var node44Polygone2 = Snap.select('#node-4-4-polygone-2');
  var node44Polygone3 = Snap.select('#node-4-4-polygone-3');
  var node44Polygone4 = Snap.select('#node-4-4-polygone-4');
  var node44Circle1 = Snap.select('#node-4-4-circle-1');
  var node44Circle2 = Snap.select('#node-4-4-circle-2');
  var node44Circle3 = Snap.select('#node-4-4-circle-3');
  var node44Text1 = Snap.select('#node-4-4-text-1');
  var node44Text2 = Snap.select('#node-4-4-text-2');
  var node44Text3 = Snap.select('#node-4-4-text-3');
  var node44Text4 = Snap.select('#node-4-4-text-4');

  var node5 = Snap.select('#node-5');
  var node5Polygone1 = Snap.select('#node-5-polygone-1');
  var node5Polygone2 = Snap.select('#node-5-polygone-2');
  var node5Polygone3 = Snap.select('#node-5-polygone-3');
  var node5Polygone4 = Snap.select('#node-5-polygone-4');
  var node5Circle1 = Snap.select('#node-5-circle-1');
  var node5Circle2 = Snap.select('#node-5-circle-2');
  var node5Circle3 = Snap.select('#node-5-circle-3');
  var node5Text1 = Snap.select('#node-5-text-1');
  var node5Text2 = Snap.select('#node-5-text-2');
  var node5Text3 = Snap.select('#node-5-text-3');
  var node5Text4 = Snap.select('#node-5-text-4');

  var node51 = Snap.select('#node-5-1');
  var node51Polygone1 = Snap.select('#node-5-1-polygone-1');
  var node51Polygone2 = Snap.select('#node-5-1-polygone-2');
  var node51Polygone3 = Snap.select('#node-5-1-polygone-3');
  var node51Polygone4 = Snap.select('#node-5-1-polygone-4');
  var node51Polygone5 = Snap.select('#node-5-1-polygone-5');
  var node51Circle1 = Snap.select('#node-5-1-circle-1');
  var node51Circle2 = Snap.select('#node-5-1-circle-2');
  var node51Circle3 = Snap.select('#node-5-1-circle-3');
  var node51Text1 = Snap.select('#node-5-1-text-1');
  var node51Text2 = Snap.select('#node-5-1-text-2');
  var node51Text3 = Snap.select('#node-5-1-text-3');
  var node51Text4 = Snap.select('#node-5-1-text-4');

  var node52 = Snap.select('#node-5-2');
  var node52Polygone1 = Snap.select('#node-5-2-polygone-1');
  var node52Polygone2 = Snap.select('#node-5-2-polygone-2');
  var node52Polygone3 = Snap.select('#node-5-2-polygone-3');
  var node52Polygone4 = Snap.select('#node-5-2-polygone-4');
  var node52Polygone5 = Snap.select('#node-5-2-polygone-5');
  var node52Circle1 = Snap.select('#node-5-2-circle-1');
  var node52Circle2 = Snap.select('#node-5-2-circle-2');
  var node52Circle3 = Snap.select('#node-5-2-circle-3');
  var node52Circle4 = Snap.select('#node-5-2-circle-4');
  var node52Text1 = Snap.select('#node-5-2-text-1');
  var node52Text2 = Snap.select('#node-5-2-text-2');
  var node52Text3 = Snap.select('#node-5-2-text-3');
  var node52Text4 = Snap.select('#node-5-2-text-4');
  var node52Text5 = Snap.select('#node-5-2-text-5');

  var node53 = Snap.select('#node-5-3');
  var node53Polygone1 = Snap.select('#node-5-3-polygone-1');
  var node53Polygone2 = Snap.select('#node-5-3-polygone-2');
  var node53Polygone3 = Snap.select('#node-5-3-polygone-3');
  var node53Polygone4 = Snap.select('#node-5-3-polygone-4');
  var node53Polygone5 = Snap.select('#node-5-3-polygone-5');
  var node53Circle1 = Snap.select('#node-5-3-circle-1');
  var node53Circle2 = Snap.select('#node-5-3-circle-2');
  var node53Circle3 = Snap.select('#node-5-3-circle-3');
  var node53Circle4 = Snap.select('#node-5-3-circle-4');
  var node53Text1 = Snap.select('#node-5-3-text-1');
  var node53Text2 = Snap.select('#node-5-3-text-2');
  var node53Text3 = Snap.select('#node-5-3-text-3');
  var node53Text4 = Snap.select('#node-5-3-text-4');
  var node53Text5 = Snap.select('#node-5-3-text-5');

  node1.click(function(event) {
    nodeRootTo1(NavigationType.NAVIGATION);
    event.stopPropagation();
  });
  node2.click(function(event) {
    nodeRootTo2(NavigationType.NAVIGATION);
    event.stopPropagation();
  });
  node3.click(function(event) {
    nodeRootTo3(NavigationType.NAVIGATION);
    event.stopPropagation();
  });
  node4.click(function(event) {
    nodeRootTo4(NavigationType.NAVIGATION);
    event.stopPropagation();
  });
  node5.click(function(event) {
    nodeRootTo5(NavigationType.NAVIGATION);
    event.stopPropagation();
  });
  nodeRoot.click(function(event) {
    backToRoot(true);
    event.stopPropagation();
  });
  nodeRootCircle1.click(function(event) {
    if(level !== 1) {
      backToRoot(true);
    } else {
      backToRoot(false);
      nodeRootTo1(NavigationType.GRAPHIC);
    }
    $('.dropdown').removeClass('open');
    event.stopPropagation();
  });
  nodeRootPolygone1.click(function(event) {
    if(level !== 1) {
      backToRoot(true);
    } else {
      backToRoot(false);
      nodeRootTo1(NavigationType.GRAPHIC);
    }
    $('.dropdown').removeClass('open');
    event.stopPropagation();
  });
  nodeRootText1.click(function(event) {
    if(level !== 1) {
      backToRoot(true);
    } else {
      backToRoot(false);
      nodeRootTo1(NavigationType.GRAPHIC);
    }
    $('.dropdown').removeClass('open');
    event.stopPropagation();
  });
  nodeRootCircle2.click(function(event) {
    if(level !== 1) {
      backToRoot(true);
    } else {
      backToRoot(false);
      nodeRootTo2(NavigationType.GRAPHIC);
    }
    $('.dropdown').removeClass('open');
    event.stopPropagation();
  });
  nodeRootPolygone2.click(function(event) {
    if(level !== 1) {
      backToRoot(true);
    } else {
      backToRoot(false);
      nodeRootTo2(NavigationType.GRAPHIC);
    }
    $('.dropdown').removeClass('open');
    event.stopPropagation();
  });
  nodeRootText2.click(function(event) {
    if(level !== 1) {
      backToRoot(true);
    } else {
      backToRoot(false);
      nodeRootTo2(NavigationType.GRAPHIC);
    }
    $('.dropdown').removeClass('open');
    event.stopPropagation();
  });
  nodeRootCircle3.click(function(event) {
    if(level !== 1) {
      backToRoot(true);
    } else {
      backToRoot(false);
      nodeRootTo3(NavigationType.GRAPHIC);
    }
    $('.dropdown').removeClass('open');
    event.stopPropagation();
  });
  nodeRootPolygone3.click(function(event) {
    if(level !== 1) {
      backToRoot(true);
    } else {
      backToRoot(false);
      nodeRootTo3(NavigationType.GRAPHIC);
    }
    $('.dropdown').removeClass('open');
    event.stopPropagation();
  });
  nodeRootText3.click(function(event) {
    if(level !== 1) {
      backToRoot(true);
    } else {
      backToRoot(false);
      nodeRootTo3(NavigationType.GRAPHIC);
    }
    $('.dropdown').removeClass('open');
    event.stopPropagation();
  });
  nodeRootCircle3.click(function(event) {
    if(level !== 1) {
      backToRoot(true);
    } else {
      backToRoot(false);
      nodeRootTo3(NavigationType.GRAPHIC);
    }
    $('.dropdown').removeClass('open');
    event.stopPropagation();
  });
  nodeRootPolygone4.click(function(event) {
    if(level !== 1) {
      backToRoot(true);
    } else {
      backToRoot(false);
      nodeRootTo4(NavigationType.GRAPHIC);
    }
    $('.dropdown').removeClass('open');
    event.stopPropagation();
  });
  nodeRootText4.click(function(event) {
    if(level !== 1) {
      backToRoot(true);
    } else {
      backToRoot(false);
      nodeRootTo4(NavigationType.GRAPHIC);
    }
    $('.dropdown').removeClass('open');
    event.stopPropagation();
  });
  nodeRootCircle4.click(function(event) {
    if(level !== 1) {
      backToRoot(true);
    } else {
      backToRoot(false);
      nodeRootTo4(NavigationType.GRAPHIC);
    }
    $('.dropdown').removeClass('open');
    event.stopPropagation();
  });
  nodeRootPolygone5.click(function(event) {
    if(level !== 1) {
      backToRoot(true);
    } else {
      backToRoot(false);
      nodeRootTo5(NavigationType.GRAPHIC);
    }
    $('.dropdown').removeClass('open');
    event.stopPropagation();
  });
  nodeRootText5.click(function(event) {
    if(level !== 1) {
      backToRoot(true);
    } else {
      backToRoot(false);
      nodeRootTo5(NavigationType.GRAPHIC);
    }
    $('.dropdown').removeClass('open');
    event.stopPropagation();
  });
  nodeRootCircle5.click(function(event) {
    if(level !== 1) {
      backToRoot(true);
    } else {
      backToRoot(false);
      nodeRootTo5(NavigationType.GRAPHIC);
    }
    $('.dropdown').removeClass('open');
    event.stopPropagation();
  });
  node1Polygone4.click(function(event) {
    node1To11(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node1Circle1.click(function(event) {
    node1To11(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node1Text1.click(function(event) {
    node1To11(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node1Polygone3.click(function(event) {
    node1To12(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node1Circle3.click(function(event) {
    node1To12(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node1Text3.click(function(event) {
    node1To12(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node1Polygone1.click(function(event) {
    node1To13(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node1Circle2.click(function(event) {
    node1To13(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node1Text2.click(function(event) {
    node1To13(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node2Polygone2.click(function(event) {
    node2To21(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node2Circle2.click(function(event) {
    node2To21(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node2Text3.click(function(event) {
    node2To21(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node2Polygone1.click(function(event) {
    node2To22(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node2Circle1.click(function(event) {
    node2To22(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node2Text2.click(function(event) {
    node2To22(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node3Polygone1.click(function(event) {
    node3To31(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node3Circle1.click(function(event) {
    node3To31(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node3Text2.click(function(event) {
    node3To31(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node3Polygone2.click(function(event) {
    node3To32(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node3Circle2.click(function(event) {
    node3To32(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node3Text3.click(function(event) {
    node3To32(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node3Polygone3.click(function(event) {
    node3To33(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node3Circle3.click(function(event) {
    node3To33(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node3Text4.click(function(event) {
    node3To33(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node4Polygone1.click(function(event) {
    node4To41(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node4Circle1.click(function(event) {
    node4To41(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node4Text2.click(function(event) {
    node4To41(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node4Polygone3.click(function(event) {
    node4To42(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node4Circle2.click(function(event) {
    node4To42(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node4Text3.click(function(event) {
    node4To42(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node4Polygone4.click(function(event) {
    node4To43(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node4Circle3.click(function(event) {
    node4To43(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node4Text4.click(function(event) {
    node4To43(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node4Polygone2.click(function(event) {
    node4To44(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node4Circle4.click(function(event) {
    node4To44(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node4Text5.click(function(event) {
    node4To44(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node5Polygone1.click(function(event) {
    node5To51(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node5Circle1.click(function(event) {
    node5To51(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node5Text2.click(function(event) {
    node5To51(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node5Polygone2.click(function(event) {
    node5To52(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node5Circle2.click(function(event) {
    node5To52(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node5Text3.click(function(event) {
    node5To52(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node5Polygone3.click(function(event) {
    node5To53(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node5Circle3.click(function(event) {
    node5To53(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node5Text4.click(function(event) {
    node5To53(NavigationType.GRAPHIC);
    event.stopPropagation();
  });
  node11Polygone8.click(function(event) {
    node11To111();
  });
  node11Circle1.click(function(event) {
    node11To111();
  });
  node11Text1.click(function(event) {
    node11To111();
  });
  node11Polygone5.click(function(event) {
    node11To112();
  });
  node11Circle2.click(function(event) {
    node11To112();
  });
  node11Text6.click(function(event) {
    node11To112();
  });
  node11Polygone2.click(function(event) {
    node11To113();
  });
  node11Circle3.click(function(event) {
    node11To113();
  });
  node11Text4.click(function(event) {
    node11To113();
  });
  node11Polygone3.click(function(event) {
    node11To114();
  });
  node11Circle4.click(function(event) {
    node11To114();
  });
  node11Text3.click(function(event) {
    node11To114();
  });
  node11Polygone4.click(function(event) {
    node11To115();
  });
  node11Circle5.click(function(event) {
    node11To115();
  });
  node11Text5.click(function(event) {
    node11To115();
  });
  node12Polygone2.click(function(event) {
    node12To121();
  });
  node12Circle3.click(function(event) {
    node12To121();
  });
  node12Text3.click(function(event) {
    node12To121();
  });
  node12Polygone3.click(function(event) {
    node12To122();
  });
  node12Circle1.click(function(event) {
    node12To122();
  });
  node12Text1.click(function(event) {
    node12To122();
  });
  node12Polygone4.click(function(event) {
    node12To123();
  });
  node12Circle2.click(function(event) {
    node12To123();
  });
  node12Text2.click(function(event) {
    node12To123();
  });
  node13Polygone7.click(function(event) {
    node13To131();
  });
  node13Circle4.click(function(event) {
    node13To131();
  });
  node13Text6.click(function(event) {
    node13To131();
  });
  node13Polygone1.click(function(event) {
    node13To132();
  });
  node13Circle5.click(function(event) {
    node13To132();
  });
  node13Text4.click(function(event) {
    node13To132();
  });
  node13Polygone2.click(function(event) {
    node13To133();
  });
  node13Circle6.click(function(event) {
    node13To133();
  });
  node13Text5.click(function(event) {
    node13To133();
  });
  node13Polygone6.click(function(event) {
    node13To134();
  });
  node13Circle7.click(function(event) {
    node13To134();
  });
  node13Text7.click(function(event) {
    node13To134();
  });
  node13Polygone5.click(function(event) {
    node13To135();
  });
  node13Circle1.click(function(event) {
    node13To135();
  });
  node13Text1.click(function(event) {
    node13To135();
  });
  node13Polygone4.click(function(event) {
    node13To136();
  });
  node13Circle2.click(function(event) {
    node13To136();
  });
  node13Text2.click(function(event) {
    node13To136();
  });
  node13Polygone8.click(function(event) {
    node13To137();
  });
  node13Circle3.click(function(event) {
    node13To137();
  });
  node13Text3.click(function(event) {
    node13To137();
  });
  node31Polygone3.click(function(event) {
    node31To311();
  });
  node31Circle1.click(function(event) {
    node31To311();
  });
  node31Text3.click(function(event) {
    node31To311();
  });
  node31Polygone4.click(function(event) {
    node31To312();
  });
  node31Circle2.click(function(event) {
    node31To312();
  });
  node31Text2.click(function(event) {
    node31To312();
  });
  node31Polygone2.click(function(event) {
    node31To313();
  });
  node31Circle3.click(function(event) {
    node31To313();
  });
  node31Text4.click(function(event) {
    node31To313();
  });
  node32Polygone2.click(function(event) {
    node32To321();
  });
  node32Circle3.click(function(event) {
    node32To321();
  });
  node32Text4.click(function(event) {
    node32To321();
  });
  node32Polygone3.click(function(event) {
    node32To322();
  });
  node32Circle1.click(function(event) {
    node32To322();
  });
  node32Text2.click(function(event) {
    node32To322();
  });
  node32Polygone4.click(function(event) {
    node32To323();
  });
  node32Circle2.click(function(event) {
    node32To323();
  });
  node32Text3.click(function(event) {
    node32To323();
  });
  node33Polygone4.click(function(event) {
    node33To331();
  });
  node33Circle2.click(function(event) {
    node33To331();
  });
  node33Text3.click(function(event) {
    node33To331();
  });
  node33Polygone2.click(function(event) {
    node33To332();
  });
  node33Circle3.click(function(event) {
    node33To332();
  });
  node33Text2.click(function(event) {
    node33To332();
  });
  node33Polygone3.click(function(event) {
    node33To333();
  });
  node33Circle1.click(function(event) {
    node33To333();
  });
  node33Text4.click(function(event) {
    node33To333();
  });

  node41Polygone1.click(function(event) {
    node41To411();
  });
  node41Circle1.click(function(event) {
    node41To411();
  });
  node41Text2.click(function(event) {
    node41To411();
  });
  node41Polygone2.click(function(event) {
    node41To412();
  });
  node41Circle2.click(function(event) {
    node41To412();
  });
  node41Text3.click(function(event) {
    node41To412();
  });
  node41Polygone4.click(function(event) {
    node41To413();
  });
  node41Circle3.click(function(event) {
    node41To413();
  });
  node41Text4.click(function(event) {
    node41To413();
  });
  node44Polygone1.click(function(event) {
    node44To443();
  });
  node44Circle1.click(function(event) {
    node44To443();
  });
  node44Text2.click(function(event) {
    node44To443();
  });
  node44Polygone2.click(function(event) {
    node44To441();
  });
  node44Circle2.click(function(event) {
    node44To441();
  });
  node44Text3.click(function(event) {
    node44To441();
  });
  node44Polygone4.click(function(event) {
    node44To442();
  });
  node44Circle3.click(function(event) {
    node44To442();
  });
  node44Text4.click(function(event) {
    node44To442();
  });
  node51Polygone3.click(function(event) {
    node51To511();
  });
  node51Circle1.click(function(event) {
    node51To511();
  });
  node51Text4.click(function(event) {
    node51To511();
  });
  node51Polygone4.click(function(event) {
    node51To512();
  });
  node51Circle2.click(function(event) {
    node51To512();
  });
  node51Text2.click(function(event) {
    node51To512();
  });
  node51Polygone2.click(function(event) {
    node51To513();
  });
  node51Circle3.click(function(event) {
    node51To513();
  });
  node51Text3.click(function(event) {
    node51To513();
  });
  node52Polygone5.click(function(event) {
    node52To521();
  });
  node52Circle4.click(function(event) {
    node52To521();
  });
  node52Text4.click(function(event) {
    node52To521();
  });
  node52Polygone2.click(function(event) {
    node52To522();
  });
  node52Circle1.click(function(event) {
    node52To522();
  });
  node52Text1.click(function(event) {
    node52To522();
  });
  node52Polygone1.click(function(event) {
    node52To523();
  });
  node52Circle2.click(function(event) {
    node52To523();
  });
  node52Text2.click(function(event) {
    node52To523();
  });
  node52Polygone3.click(function(event) {
    node52To524();
  });
  node52Circle3.click(function(event) {
    node52To524();
  });
  node52Text3.click(function(event) {
    node52To524();
  });
  node53Polygone3.click(function(event) {
    node53To531();
  });
  node53Circle3.click(function(event) {
    node53To531();
  });
  node53Text5.click(function(event) {
    node53To531();
  });
  node53Polygone5.click(function(event) {
    node53To532();
  });
  node53Circle4.click(function(event) {
    node53To532();
  });
  node53Text3.click(function(event) {
    node53To532();
  });
  node53Polygone2.click(function(event) {
    node53To533();
  });
  node53Circle1.click(function(event) {
    node53To533();
  });
  node53Text2.click(function(event) {
    node53To533();
  });
  node53Polygone1.click(function(event) {
    node53To534();
  });
  node53Circle2.click(function(event) {
    node53To534();
  });
  node53Text4.click(function(event) {
    node53To534();
  });

  var animating = true;

  animatingCircles = level1Circles;

  function circleAnimationOn(){
    if(animating) {
      animatingCircles.animate({
        opacity: '1',
        r: 10,
        rx: 10,
        ry: 10
      }, 500, mina.easeout, circleAnimationOut);
    };
  }

  function circleAnimationOut() {
    animatingCircles.animate({
      opacity: '0.7',
      r: 8,
      rx: 8,
      ry: 8
    }, 500, mina.easein, circleAnimationOn);
  };

  circleAnimationOn();

  // check if it is mobile
  if(isBreakpoint('xs') || isBreakpoint('sm')) {
    scaleForMobile();
  }

  // Content window
  $('.content-window').hide();
  $('.content-window-mobile').hide();

  // Navigation stuff
  $('.level-2').hide();
  $('.level-3').hide();

  $('.dropdown').addClass('open');
  $('.dropdown').removeClass('open');

  initNodes();

  $('.nav-overview-link').click(function(event) {
    event.preventDefault();
    backToRoot(true);
  });

  $('.nav-back-link').click(function(event) {
    event.preventDefault();
    if(level === 3) {
      var currentTheme = currentState.match(/\d+/)[0];
      switch(currentTheme) {
        case '1':
          nodeRootTo1(NavigationType.NAVIGATION);
          break;
        case '2':
          nodeRootTo2(NavigationType.NAVIGATION);
          break;
        case '3':
          nodeRootTo3(NavigationType.NAVIGATION);
          break;
        case '4':
          nodeRootTo4(NavigationType.NAVIGATION);
          break;
        case '5':
          nodeRootTo5(NavigationType.NAVIGATION);
          break;
      }
    } else if(level === 2) {
      backToRoot(true);
    }
  });

  $('.nav-node-1').click(function(event) {
    event.preventDefault();
    backToRoot(false);
    nodeRootTo1(NavigationType.NAVIGATION);
    $('.dropdown').removeClass('open');
  });
  $('.nav-node-1-1').click(function(event) {
    event.preventDefault();
    node1To11(NavigationType.NAVIGATION);
    $('.dropdown').removeClass('open');
  });
  $('.nav-node-1-2').click(function(event) {
    event.preventDefault();
    node1To12(NavigationType.NAVIGATION);
    $('.dropdown').removeClass('open');
  });
  $('.nav-node-1-3').click(function(event) {
    event.preventDefault();
    node1To13(NavigationType.NAVIGATION);
    $('.dropdown').removeClass('open');
  });
  $('.nav-node-2').click(function(event) {
    event.preventDefault();
    backToRoot(false);
    nodeRootTo2(NavigationType.NAVIGATION);
    $('.dropdown').removeClass('open');
  });
  $('.nav-node-2-1').click(function(event) {
    event.preventDefault();
    node2To21(NavigationType.NAVIGATION);
    $('.dropdown').removeClass('open');
  });
  $('.nav-node-2-2').click(function(event) {
    event.preventDefault();
    node2To22(NavigationType.NAVIGATION);
    $('.dropdown').removeClass('open');
  });
  $('.nav-node-3').click(function(event) {
    event.preventDefault();
    backToRoot(false);
    nodeRootTo3(NavigationType.NAVIGATION);
    $('.dropdown').removeClass('open');
  });
  $('.nav-node-3-1').click(function(event) {
    event.preventDefault();
    node3To31(NavigationType.NAVIGATION);
    $('.dropdown').removeClass('open');
  });
  $('.nav-node-3-2').click(function(event) {
    event.preventDefault();
    node3To32(NavigationType.NAVIGATION);
    $('.dropdown').removeClass('open');
  });
  $('.nav-node-3-3').click(function(event) {
    event.preventDefault();
    node3To33(NavigationType.NAVIGATION);
    $('.dropdown').removeClass('open');
  });
  $('.nav-node-4').click(function(event) {
    event.preventDefault();
    backToRoot(false);
    nodeRootTo4(NavigationType.NAVIGATION);
    $('.dropdown').removeClass('open');
  });
  $('.nav-node-4-1').click(function(event) {
    event.preventDefault();
    node4To41(NavigationType.NAVIGATION);
    $('.dropdown').removeClass('open');
  });
  $('.nav-node-4-4').click(function(event) {
    event.preventDefault();
    node4To44(NavigationType.NAVIGATION);
    $('.dropdown').removeClass('open');
  });
  $('.nav-node-5').click(function(event) {
    event.preventDefault();
    backToRoot(false);
    nodeRootTo5(NavigationType.NAVIGATION);
    $('.dropdown').removeClass('open');
  });
  $('.nav-node-5-1').click(function(event) {
    event.preventDefault();
    node5To51(NavigationType.NAVIGATION);
    $('.dropdown').removeClass('open');
  });
  $('.nav-node-5-2').click(function(event) {
    event.preventDefault();
    node5To52(NavigationType.NAVIGATION);
    $('.dropdown').removeClass('open');
  });
  $('.nav-node-5-3').click(function(event) {
    event.preventDefault();
    node5To53(NavigationType.NAVIGATION);
    $('.dropdown').removeClass('open');
  });

});
