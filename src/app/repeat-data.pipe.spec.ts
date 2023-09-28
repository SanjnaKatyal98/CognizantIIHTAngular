import { RepeatDataPipe } from './repeat-data.pipe';

describe('RepeatDataPipe', () => {
  it('create an instance', () => {
    const pipe = new RepeatDataPipe();
    expect(pipe).toBeTruthy();
  });
  it('should repeat 2 times', () => {
    const pipe = new RepeatDataPipe();
    const data=pipe.transform('mm',2);
    expect(data).toEqual('mmmm');
  });
});
