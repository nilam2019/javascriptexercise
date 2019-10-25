const primefactor=require('./primefactor');
describe ('primefactor',() => {

    it('should return an empty array if invoked without parameter',() =>{
        expect(primefactor()).toEqual([]);

    });
    it('should return prime factors for number 2 as [2]',()=>{
        expect(primefactor(2)).toEqual([2]);
    });

    it('should return prime factors for number 3 as [3]',()=>{
        expect(primefactor(3)).toEqual([3]);
    });
    it('should return prime factors for number 4 as [2,2]',()=>{
        expect(primefactor(4)).toEqual([2,2]);
    })
    it('should return prime factors for number 6 as [2,3]',()=>{
        expect(primefactor(6)).toEqual([2,3]);
    })
    it('should return prime factors for number 8 as [2,2,2]',()=>{
        expect(primefactor(8)).toEqual([2,2,2]);
    })
    it('should return prime factors for number 9 as [3,3]',()=>{
        expect(primefactor(9)).toEqual([3,3]);
    })
});