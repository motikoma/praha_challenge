import admin from "firebase-admin";
import express from "express";
import dotenv from "dotenv";

// .envファイルから環境変数を読み込む
dotenv.config();

// Firebaseの初期化
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }),
});

const db = admin.firestore();

const app = express();
const port = 3001;

/**
 * ユーザーの特定の課題を完了するスクリプト
 * @param userId
 * @param questionId
 */
async function markQuestionsAsCompleted(userId: string, questionId: string) {
  const question = await db
    .collection("users")
    .doc(userId)
    .collection("questions")
    .doc(questionId)
    .get();

  if (!question.exists || !question.data()) {
    console.log("User does not exist");
  }

  question.ref
    .update({
      status: "TxZ31KAXgoJuerNgiWDS",
    })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
}

/**
 * ユーザーの課題ステータスを一覧表示するスクリプト
 */
async function showQuestionStatus() {
  const usersSnapshot = await db.collection("users").get();

  const users = [];

  for (const userDoc of usersSnapshot.docs) {
    const user = userDoc.data();
    const questionsSnapshot = await db
      .collection("users")
      .doc(userDoc.id)
      .collection("questions")
      .get();

    const questions = [];
    for (const questionDoc of questionsSnapshot.docs) {
      const question = questionDoc.data();
      questions.push({
        id: question.questionId,
        status: question.status,
      });

      const questionMaster = await db
        .collection("questions")
        .doc(question.questionId)
        .get();

      questions.forEach((question) => {
        if (question.id === questionMaster.id) {
          Object.assign(question, questionMaster.data());
        }
        console.log(questionMaster.data());
      });
    }

    users.push({
      id: userDoc.id,
      name: user.name,
      questions: questions,
    });
  }

  console.log(JSON.stringify(users, null, 2));
}

/**
 * 特定の課題を更新するスクリプト
 */
async function updateQuestion(
  questionMasterId: string,
  title: string,
  detail: string
) {
  const questionMaster = await db
    .collection("questions")
    .doc(questionMasterId)
    .get();

  if (!questionMaster.exists || !questionMaster.data()) {
    console.log("Question does not exist");
  }

  questionMaster.ref
    .update({
      title: title,
      detail: detail,
    })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
}

/**
 * 特定の課題を削除するスクリプト
 */
async function deleteQuestion(questionMasterId: string) {
  // 課題マスターを削除する
  const questionMaster = await db
    .collection("questions")
    .doc(questionMasterId)
    .get();

  if (!questionMaster.exists || !questionMaster.data()) {
    console.log("Question does not exist");
  }

  questionMaster.ref
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error deleting document: ", error);
    });

  // ユーザーの課題も削除する
  const usersSnapshot = await db.collection("users").get();
  for (const userDoc of usersSnapshot.docs) {
    const questionsSnapshot = await db
      .collection("users")
      .doc(userDoc.id)
      .collection("questions")
      .get();

    for (const questionDoc of questionsSnapshot.docs) {
      const question = questionDoc.data();
      if (question.questionId === questionMasterId) {
        questionDoc.ref.delete();
      }
    }
  }
}

/**
 * 実行
 */
// markQuestionsAsCompleted("1SjzO7XiyDElh8O76Koh", "QrZ2caHaoYW8ydK04HmA");
// showQuestionStatus();
// updateQuestion("ehK0j4fwH4gkT4e76AMQ", "課題1改定", "課題1の内容改定");
// deleteQuestion("ehK0j4fwH4gkT4e76AMQ");

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
