  function log(a) {
      console.log(a)
  }
  var x = document.getElementById('lol'),
      x1 = [],
      y1 = {};
  x.onclick = function() {
      var t = document.getElementById('txy').value;
      if (t.indexOf('>') !== -1 && t.indexOf('<') !== -1) {
          compile(t)
          log(x1)
      }
  }
  function Xprinnchunk(a) {
      var d = [],
          le = a.length,
          pos = le,
          init = 0;
      for (var i = init; i < pos; i++) {
          var start = a.indexOf('({'),
              end = a.indexOf('})');
          if (start !== -1) {
              var k = a.substr(init, start);
              d.push(k)
              var k1 = a.substr(start, (end + 1) - start + 1);
              d.push(k1)
          } else {
              var k = a.substr(0, le);
              d.push(k)
              break;
          }
          var a = a.substr(end + 2, le);
      }
      return (d)
  };
  function compile(f) {
      var g = document.createElement('div');
      g.innerHTML = f;
      child(g);
  }
  function dublicate(obj1) {
      return Object.assign({}, obj1);
  }
  function giveBindings(x) {
      var p = 0,
          d = [],
          g = x.replace(/\s/g, '');
      for (var i = p; i < g.length; i++) {
          x = x.substr(p, x.length - p);
          f1 = x.indexOf('}]');
          f2 = x.indexOf('[{');
          if (f1 == -1 || f2 == -1) {
              break;
          }
          c = x.substr(f2 + 1, f1 - f2);
          d.push('[' + c + ']')
          var p = f2 + (c.length + 2);
      }
      return (d);
  };
  function atbds(le) {
      var lt = [];
      if (le !== null && le !== undefined) {
          for (var att, i = 0, atts = le.attributes, n = atts.length; i < n; i++) {
              var att = atts[i];
              var tj = att.nodeValue;
              var dy = att.nodeName;
              if (tj.indexOf('[{') !== -1 && tj.indexOf('}]') !== -1) {
                  var rt = {
                      'el': le.tagName,
                      'value': tj,
                      'bav': giveBindings(tj),
                      'batr': dy,
                      'bind': true
                  };
                  lt.push(rt);
              }
          }
          return (lt)
      }
  }
  function child(g) {
      var f = g.getElementsByTagName('*')
      for (var i0 = 0; i0 < f.length; i0++) {
          var el = f[i0];
          var cn = el.childNodes;
          // log(cn)
          if (cn.length >= 1) {

              for (var i1 = 0; i1 < cn.length; i1++) {
                  var acn = cn[i1];
                  if (acn.nodeType === 3) {
                      //if element contain textnodes
                      var data1 = acn.data;
                      var f1 = form('TN', 3, acn.parentElement.nodeName, null, null, null, Xprinnchunk(data1), giveBindings(data1));
                      x1.push(f1)
                  } else if (acn.nodeType === 1) {
                      //if this is element //looking for attribute
                      lAtr(acn)
                      //log(atbds(acn))       
                  }
              }
          } else {
              //if element dont have child //element like br input ht //this may have attributinal binds please check
              var nodename = (el.parentElement !== undefined && el.parentElement !== null) ? el.parentElement.nodeName : null;
              var f2 = form(el.tagName, 2, nodename, dublicate(el.attributes), null, null, null, null);
              x1.push(f2)
          }
      }
  }
  function lAtr(el) {
      var atr = el.attributes;
      if (atr.length >= 1) {
          for (var i2 = 0; i2 < atr.length; i2++) {
              var at = atr[i2];
              var atval = atr[i2].value;
              if (atval.indexOf('}]') !== -1 && atval.indexOf('[{') !== -1) {
                  //if element's attributes contain bindings
                  var f3 = form(el.tagName, 2, el.parentElement.nodeName, dublicate(el.attributes), atbds(el), null, null, null);
                  x1.push(f3)
              } else {
                  //if attribute dosn't contain bindings
                  var f4 = form(el.tagName, 2, el.parentElement.nodeName, dublicate(el.attributes), null, null, null, null);
                  x1.push(f4)
              }
          }
      } else {
          //if element don't have any attribute
          var f5 = form(el.tagName, 2, el.parentElement.nodeName, null, null, null, null, null);
          x1.push(f5)
      }
  }
  function form(el, ty, par, atrs, atbds, cld, data, databinds) {
      var xprindataformat = {
          'element': el, //text
          'type': ty, //number
          'parentname': par, //text
          'attribute': atrs, //object
          'attrbinds': atbds, //array
          'children': cld, //array
          'data': data, //text
          'databinds': databinds //array
      }
      return xprindataformat;
  }


