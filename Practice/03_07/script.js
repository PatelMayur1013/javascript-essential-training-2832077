/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const car={
    brand:"Hyndai",
    model:"I10 Sports",
    year :"2011",
    color:"white",
    size:{
        height:500,
        width:1000
    },
    isOn:false,
    toggleOnOff: function(isOnOff)
    {
        this.isOn=isOnOff;
    },
    newsize:function(newheight,newwidth)
    {
        this.size.height=newheight;
        this.size.width=newwidth;
    }
};

console.log("Test",car);