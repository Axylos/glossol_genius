# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


till = User.create(email: "till_lindeman@gmail.com", password: "password")
wittgenstein = User.create(email: "ludvigwitts@yahoo.com", password: "password")
marty = User.create(email: "existentThinking@hotmail.com", password: 'drowssap')


sein = Document.create(
      user_id: 3,
      title: "Sein Und Zeit",
      body: "Heidegger poses one of the oldest questions of philosophy: the question of Being. What is meant when we say that something 'is', that mountains and valleys 'are'? And what mode of being is human being, which differs from all other kinds of being on earth in that it can pose the question about its own being? There is a discipline of philosophy devoted to this question: what is called 'ontology', the 'account of being'. From Aristotle to Descartes and Kant, ontology has attempted to answer the question of Being by, crudely stated, theorising about definite I-World or subject-object relationships. Not so Heidegger. For he grasps human existence concretely as that being which is 'present' to itself in its own temporality, that experiences itself as 'already there'. He says that there is a wholly originary existential orientation (or feeling or being-in-a-mood: Befindlichkeit) in which human existence finds access to itself, namely anxiety. And this, according to Heidegger, lies as it were at the fundament of this being, without requiring any statements about subject-object relationships or diverse mental categories."
          )

tract = Document.create(
      user_id: 2,
      title: "tractatus",
      body: "Ein Bild zur Erklärung des Wahrheitsbegriffes: Schwarzer Fleck auf weißem Papier; die Form des Fleckes kann man beschreiben, indem man für jeden Punkt der Fläche angibt, ob er weiß oder schwarz ist. Der Tatsache, dass ein Punkt schwarz ist, entspricht eine positive—der, dass ein Punkt weiß (nicht schwarz) ist, eine negative Tatsache. Bezeichne ich einen Punkt der Fläche (einen Fregeschen Wahrheitswert), so entspricht dies der Annahme, die zur Beurteilung aufgestellt wird, etc. etc.
Um aber sagen zu können, ein Punkt sei schwarz oder weiß, muss ich vorerst wissen, wann man einen Punkt schwarz und wann man ihn weiß nennt; um sagen zu können: „p“ ist wahr (oder falsch), muss ich bestimmt haben, unter welchen Umständen ich „p“ wahr nenne, und damit bestimme ich den Sinn des Satzes.
Der Punkt, an dem das Gleichnis hinkt ist nun der: Wir können auf einen Punkt des Papiers zeigen, auch ohne zu wissen, was weiß und schwarz ist; einem Satz ohne Sinn aber entspricht gar nichts, denn er bezeichnet kein Ding (Wahrheitswert) dessen Eigenschaften etwa „falsch“ oder „wahr“ hießen; das Verbum eines Satzes ist nicht „ist wahr“ oder „ist falsch“—wie Frege glaubte—, sondern das, was „wahr ist“, muss das Verbum schon enthalten.")

crit = Document.create(
        user_id: 3,
        title: "what is this garbage",
        body: "roflcoaster")

critical_note = Annotation.create(
        source_document_id: 3,
        annotation_id: 4,
        source_text: "1 60")