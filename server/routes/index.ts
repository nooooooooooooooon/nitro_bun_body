export default defineEventHandler((event) => {
  return `
    <form action="/" method="post" enctype="multipart/form-data">
      <input type="file" name="avatar" />
      <input type="submit" />
    </form>
  `;
});
