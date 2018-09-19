const userInvitationsDataRows = [
  {id: 1, inviting_user_id: 003, receiving_user_id: 002, ability_type_id: 001, accepted: false, rejected: false},
  {id: 2, inviting_user_id: 002, receiving_user_id: 001, ability_type_id: 002, accepted: false, rejected: false},
  {id: 3, inviting_user_id: 001, receiving_user_id: 001, ability_type_id: 003, accepted: false, rejected: false}
]

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_invitations').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_invitations').insert(userInvitationsDataRows);
    });
};
