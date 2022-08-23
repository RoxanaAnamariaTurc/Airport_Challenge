class Airport
{
    constructor(capacity)
    {
        this.capacity = capacity;
    }
    listOfPlanes = [];

    land(plane)
    {
        for (let i = 0; i < this.listOfPlanes.length; i++)
        {
            if (this.listOfPlanes[i] === plane)
            {
                return `Plane already landed`
            }

        }
        if (this.isFull())
        {
            return `Airport is full`
        }
        else
        {
            this.listOfPlanes.push(plane);
            return plane;
        }


    }
    isFull()
    {
        return this.listOfPlanes.length === this.capacity;

    }
    takeOff(plane)
    {
        let isAtAirport = false;
        for (let i = 0; i < this.listOfPlanes.length; i++)
        {
            if (this.listOfPlanes[i] === plane)
            {
                let newList = this.listOfPlanes.filter(plane => plane !== this.listOfPlanes[i]);
                this.listOfPlanes = newList;
                isAtAirport = true
                break;
            }
        }

        if (!isAtAirport)
        {
            return `Plane not at the airport`
        }
    }
}

module.exports = Airport;




