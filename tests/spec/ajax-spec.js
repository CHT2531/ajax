describe("Tests Ajax exercises", function() 
{
  describe("Q2. The function ajax",function()
  {
    beforeEach(function(done)
    {
      spyOn(console, 'log');
      ajax();
      setTimeout(function() {
        done();
      }, 100); 
    });

    it("should make an ajax request when called",function()
    {
      expect(console.log).toHaveBeenCalled();
      expect(console.log.calls.argsFor(0)).toEqual(["Hello from Ajax"]);
    })
  })

  describe("Q3. The function ajax",function()
  {
    beforeEach(function(done)
    {
      spyOn(console, 'log');
      ajax("data/more-data.txt");
      setTimeout(function() {
        done();
      }, 100);
    });

    it("should accept an argument that specifies the URL of the resource to be requested",function()
    {
      //alert(console.log.calls.count());
      expect(console.log).toHaveBeenCalled();
      expect(console.log.calls.argsFor(0)).toEqual(["Exercise 1 - Q3"]);
    })
  })
  describe("Q4. The function ajax",function()
  {
  
    beforeEach(function(done)
    {
      spyOn(console, 'log');
      ajax("data/more-students.json");
      setTimeout(function() {
        done();
      }, 100);
    });

    it("should output the name of the first student in the console",function()
    {
      var num=console.log.calls.count()-1;
      expect(console.log).toHaveBeenCalled();
      expect(console.log.calls.argsFor(num)).toEqual(["Pete"]);
    })
  })

  describe("Q5. The function ajax",function()
  {
  
    beforeEach(function(done)
    {
      spyOn(console, 'log');
      ajax("data/more-students.json");
      setTimeout(function() {
        done();
      }, 100);
    });

    it("should output student details to the page",function()
    {
      var ul=document.querySelector("#result");
      expect(ul.innerHTML).toEqual("<li>Pete 2</li>");
    })
  })

  describe("Q6. The function ajax",function()
  {
    var mockObj={
      callBack:function(data){
      }
    }
    beforeEach(function(done)
    {
      spyOn(mockObj, 'callBack');
      ajax("data/more-students.json",mockObj.callBack);
      setTimeout(function() {
        done();
      }, 100);
    });

    it("should accept two arguments, a URL and a callback function.",function()
    {
      expect(mockObj.callBack).toHaveBeenCalledWith([{id:3,name:"Pete",course:"Web Tech", mark:2}]);
    })
  })

  describe("Q7. The function ajax",function()
  {
    var mockObj={
      success:function(data){
      },
      fail:function(msg){
      }
    }
    beforeEach(function(done)
    {
      spyOn(mockObj, 'fail');
      ajax("data/wrong-url.json",mockObj.success,mockObj.fail);
      setTimeout(function() {
        done();
      }, 100);
    });

    it("should accept three arguments, a URL and a 'success' callback function and a 'fail' callback function",function()
    {
      expect(mockObj.fail).toHaveBeenCalled();
      expect(typeof mockObj.fail.calls.mostRecent().args[0]).toEqual("string");
    })
  })

});


