const { succeed, fail, repair } = require("./enhancer");

const item = {
  name: "belt",
  durability: 0,
  enhancement: 0,
};
const untouchedItem = {
  name: "belt",
  durability: 100,
  enhancement: 20,
};
const fourteenEnhanceditem = {
  name: "belt",
  durability: 50,
  enhancement: 14,
};

const sixteenEnhanceditem = {
  name: "belt",
  durability: 50,
  enhancement: 16,
};

//Tests


it("run test", function () {
    expect(true).toBe(true);
  });
  
  describe("enhancer.js", function () {
    describe("repair()", function () {
      it("should tqake in an item and reset it's durabilty to 100", function () {
        repair(item);
        expect(item.durability).toBe(100);
      });
    });
 
   describe("succeed()", function () {
      it("should increate the enhancement by 1", function () {
        succeed(item);
        expect(item.enhancement).toBe(1);
      });
      it("shouldn't increment if the item enhancement is already 20", function () {
        succeed(untouchedItem);
        expect(untouchedItem.enhancement).toBe(20);
      });
    });
  
    describe("fail()", function () {
      it("should subtract 10 from the durability and 1 from the enhancements if the enhancement level is more than 17", function () {
        fail(untouchedItem);
        expect(untouchedItem.enhancement).toBe(19);
        expect(untouchedItem.durability).toBe(90);
      });
      it("should subtract 5 from the durability if the enhancement level is less than 15", function () {
        fail(fourteenEnhanceditem);
        expect(fourteenEnhanceditem.durability).toBe(45);
      });
      it("should subtract 10 from the durability if the enhancement level is more than 15 and less than 17, the enhancement should remain unchanged", function () {
        fail(sixteenEnhanceditem);
        expect(sixteenEnhanceditem.durability).toBe(40);
        expect(sixteenEnhanceditem.enhancement).toBe(16);
      });
    });
  });