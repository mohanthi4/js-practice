const fn = () => {
  try {
    const something = something;
    throw 'something';
  } catch (e){
    console.log(e);
  }

  try {
    try {
      const something = 'something';
      throw 'something';
    } catch {
      console.log('something1');
      throw 'something';
    }
  } catch {
    console.log('something2')
  }
  throw "hiiiii"
}

fn();
fn();
