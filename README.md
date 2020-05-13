<h4 align="center">
  Mail Sender Helper
</h4>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/carlos-jean-gawronski/mail-sender-helper">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/carlos-jean-gawronski/mail-sender-helper">
  
  <a href="https://github.com/carlos-jean-gawronski/mail-sender-helper/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/carlos-jean-gawronski/mail-sender-helper">
  </a>

  <a href="https://github.com/carlos-jean-gawronski/mail-sender-helper/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/carlos-jean-gawronski/mail-sender-helper">
  </a>
</p>
<p align="center">
  <a href="#rocket-tecnologies"> :rocket: Tecnologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">💻 Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">🤔 How to Contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-execute">🔖 How to Execute</a>&nbsp;&nbsp;&nbsp;
</p>

## :rocket: Tecnologies

This project was developed with the following tecnologies:

- [Node](https://nodejs.org/en/)
- [Nodemailer](https://nodemailer.com/about/)
- [Inquirer](https://www.npmjs.com/package/inquirer)

## 💻 Project

This project allows you to send emails very fast through gmail platform with a simple interface.

## 🤔 How to contribute?

- Make a fork of this repository;
- Create a branch with your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: my new feature'`;
- Push to your branch: `git push origin my-feature`.

## 🔖 How to execute?

#### Clone the project

```sh
git clone https://github.com/carlos-jean-gawronski/mail-sender-helper.git
cd mail-sender
```

#### Download the zip of the project

In the upper right of this project, under the 'releases' field, there's a green button that reads 'Clone or Download', the same place you get the cloning link. Hit that to download this project.

### Some last steps

Additionally, you'll have to go to `src/credentials` and create a file called `credentials.json`, also put the following content inside of it:

```json
{
  "originEmail": "your email...",
  "originName": "the name that will apear in the 'from' field of your email",
  "password": "your email password..."
}
```

The last step is to allow 'Low Secure Apps' in your Google account, otherwise it'll not be possible to send any email.

### Licensed under MIT license

See more details in the LICENSE file.

---
by carlos-jean-gawronski :wave:
