import { client } from './client';

export async function fetchEquipmentList() {
  const response = await client
    .from('equipment')
    .select();

  return checkError(response);
}

export async function createEquipment(equipment) {
  const response = await client
    .from('equipment')
    .insert(equipment);

  return checkError(response);
}

export async function fetchSingleEquipmentItem(id) {
  const response = await client
    .from('equipment')
    .select(`*, reviews (*)`)
    .match({ id: id })
    .single();

  return checkError(response);
}

export async function deleteEquipment(id) {
  const response = await client
    .from('equipment')
    .delete()
    .match({ id: id });
  
  return checkError(response);
}

export async function updateEquipment(equipmentItem, id) {
  const response = await client
    .from('equipment')
    .update(equipmentItem)
    .match({ id: id });

  return checkError(response);
}

export async function createReview(review, id) {
  const response = await client
    .from('reviews')
    .insert({ 
      review: review,
      equipment_id: id
    });

  return checkError(response);
}

export async function deleteReviewsForAnItem(id) {
  const response = await client
    .from('reviews')
    .delete()
    .match({ equipment_id: id });

  return checkError(response);
}



//AUTH STUFF

// export async function getUser() {
//   return client.auth.session() && client.auth.session().user;
// }

// export async function checkAuth() {
//   const user = await getUser();

//   if (!user) location.replace('../'); 
// }

// export async function redirectIfLoggedIn() {
//   if (await getUser()) {
//     location.replace('./other-page');
//   }
// }

export async function signUpUser(email, password){
  const response = await client.auth.signUp({ email, password });
  
  return response.user;
}

export async function signInUser(email, password){
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  // return window.location.href = '../';
}

function checkError({ data, error }) {
  return error ? alert(error) : data;
}