# transpiler-design---holi_colour_-templating-engine
Templating engine that compiles hypertext markup into object Model. 



Trying to create js templating engine that transpires  hypertext markup into js object Model. 
75 % of work is done only placing created object in child and parent of specific object is left.
Demo : - 

                <ul id="list">
                         Hey this is [{name1}] && [{name3}]!
                        <ol class="list-me">
                           <span id="list_1" class="[{o.name}]-item">[{o.name}]..</span>
                           <span id="list_2" class="[{o.age}]-item">[{o.age}]..</span>
                        </ol>
                   </ul>

   To:- 

       {
          element:'UL',
          type:1, 
          parentname:null, 
          attribute:{'id':'list'},
          attrbinds: null, 
          data: 'Hey this is [{name1}] && [{name3}]!',
          databinds: ['[{name1}]','[{name3}]'], 
          children: [   
                        {
                           element:'TN', //textnode
                           type:3, 
                            parentname:'UL#list', 
                            attribute:null,
                            attrbinds: null, 
                            data:'Hey this is [{name1}] && [{name3}]!',
                            databinds:['[{name1}]','[{name3}]'],
                            children: [] 
                         }, 
                         {
                            element:'OL',
                            type:1, 
                            parentname:'UL#list',
                            attribute:{'class':'list-me'},
                            attrbinds: null,
                            data: null,
                            databinds: null,
                            children: [
                                        {
                                          element:'SPAN',
                                          type:1, 
                                          parentname:'OL.list-me',
                                          attribute:{'id':'list_1','class':"[{o.name}]-item"},
                                          attrbinds: [ 
                                                        {'class':'[{o.name}]'}
                                                     ], 
                                          data:'[{o.name}]..', 
                                          databinds:['[{name1}]'], 
                                          children: [] 
                                       },
                                       {
                                          element:'SPAN', 
                                          type:1,
                                          parentname:'OL.list-me',
                                          attribute:{'id':'list_2','class':"[{o.age}]-item"},
                                          attrbinds: [ 
                                                        {'class':'[{o.age}]'}
                                                     ], 
                                          data:'[{o.age}]..',
                                          databinds:['[{o.age}]'], 
                                          children: [] 
                                       }
                            ] 
                         }
                   ]
      }


