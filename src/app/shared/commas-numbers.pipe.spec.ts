import { CommasNumbersPipe } from './commas-numbers.pipe';

describe('CommasNumbersPipe', () => {
  it('create an instance', () => {
    const pipe = new CommasNumbersPipe();
    expect(pipe).toBeTruthy();
  });
});
