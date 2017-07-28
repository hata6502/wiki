import 'should';
import wiki from '../src/wiki';

describe('Live tests', () => {
  it('should handle non existent pages properly', function(done) {
    this.timeout(5000);
    wiki()
      .page('asdasdlkalskdjalsdjalskdalsdjasdasd')
      .catch(e => {
        e.message.should.equal('No article found');
        done();
      });
  });
  it('should return first foreign image as main', function(done) {
    this.timeout(5000);
    wiki({ apiUrl: 'https://de.wikipedia.org/w/api.php' })
      .page('Batman')
      .then(page => {
        page.mainImage().then(mainImage => {
          mainImage.title.should.equal('Datei:Gotham City Saviour (2430422247).jpg');
          done();
        });
      });
  });
});