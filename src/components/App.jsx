import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

const App = () => (
<div>
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
    <div>
      <Statistics title="Upload stats" stats={data} />
    </div>
    <div>
      <FriendList friends={friends} />
    </div>
    <div>
      <TransactionHistory items={transactions} />
    </div>
  </div>

  
);

export default App;
