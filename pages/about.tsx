import Layout from '../components/Layout'

export default function AboutPage() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">حول TARBOO DEOBFUSCATE JS</h1>
      <p className="mb-4">
        يوفر الموقع أدوات متعددة لفك تشفير الشيفرات المكتوبة بجافاسكربت.
        يعتمد المشروع على خوارزميات مفتوحة المصدر مبسطة مثل Base64 وEval
        Unpacker وHumanify، وكلها مدمجة مباشرة في واجهة الاستخدام عبر Next.js
        APIs.
      </p>
      <p>جميع الأدوات مكتوبة بتقنيات حديثة باستخدام React وTailwind CSS.</p>
    </Layout>
  )
}
